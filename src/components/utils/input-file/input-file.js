import React, { Component } from 'react';
import './input-file.scss';

export default class InputFile extends Component {
    constructor(props) {
        super(props);
     
        this.state = {};

        this.inputRef = React.createRef();
    }

    checkFileAndAcceptExtensions = (base64Extension) => {
        const acceptExtensions = this.props.accept.split(',');
        const compareFileExtensions = acceptExtensions.some((accept) => {
            const acceptExtension = accept.split('/')[1];

            return base64Extension === acceptExtension;
        })

        return compareFileExtensions;
    }

    getInputData = () => {
        const files = this.inputRef.current.files;

        if (files.length) {
            const imagesPromises = [];

            for (let i = 0; i < files.length; i++) {
                imagesPromises.push(new Promise((resolve, reject) => {
                    const file = files[i];
                    const size = file.size;

                    if (this.props.maxFiles) {
                        if (i > (Number(this.props.maxFiles) - 1)) {
                            reject("Max count files " + this.props.maxFiles);
                        }
                    }

                    if (this.props.maxSize) {
                        if (size > (1024 * 1024 * Number(this.props.maxSize))) {
                            reject("File size bigger than " + this.props.maxSize + "mb");
                        }
                    }
                   
                    const reader = new FileReader();
                    
                    reader.onload = (() => {
                        const base64Extension = reader.result.split(';')[0].split('/')[1];

                        if (this.props.accept) {
                            if (this.checkFileAndAcceptExtensions(base64Extension)) {
                                resolve(file);
                            } else {
                                reject("Error! Wrong image extension");
                            }
                        } else {
                            resolve(file);
                        }
                    });

                    reader.onerror = ((error) => {
                        reject(error);
                    });

                    reader.readAsDataURL(file);
                }));
            }

            Promise.all(imagesPromises)
                .then((files) => {
                    this.props.inputGetPhotos(files);

                    if (this.props.preview) {
                        this.props.preview(files);
                    }
                })
                .catch((error) => {
                    if (this.props.getError) {
                        this.props.getError(error);
                    }
                })
        }
    }

    render() {
        return (
            <div className='input-file'>
                <input type="file"
                    name="file"
                    id="file"
                    className="input-file__input" 
                    ref={this.inputRef}
                    onChange={this.getInputData}
                    multiple={this.props.multiple ? true : false}
                    accept={this.props.accept ? this.props.accept : false}
                    />

                <label htmlFor="file"
                    className="input-file__label global-raised-button">
                        Choose a files
                </label>
            </div>
        )
    }
}
