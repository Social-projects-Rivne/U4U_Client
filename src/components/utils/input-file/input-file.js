import React, { Component } from 'react';
import './input-file.scss';

export default class InputFile extends Component {
    constructor(props) {
        super(props);
     
        this.state = {};

        this.inputRef = React.createRef();
    }

    validateFileSize = (fileSize) => {
        if (fileSize > (1024 * 1024 * Number(this.props.maxSize))) {
            return false;
        }

        return true;
    }

    validateFilesCount = (filesCount) => {
        if (filesCount > (Number(this.props.maxFiles) - 1)) {
            return false;
        }

        return true;
    }

    mimeType = (headerString) => {
        let type = null;

        switch (headerString) {
            case "89504e47":
                type = "image/png";
                break;
            case "ffd8ffe0":
            case "ffd8ffe1":
            case "ffd8ffe2":
                type = "image/jpeg";
                break;
            default:
                type = "unknown";
                break;
        };

        return type;
    }

    validateFilesData = (files) => {
        if (files.length) {
            const imagesPromises = [];

            if (this.props.maxFiles && !this.validateFilesCount(files.length)) {
                this.props.getError("Max count files " + this.props.maxFiles);
                return;
            }

            for (let i = 0; i < files.length; i++) {
                imagesPromises.push(new Promise((resolve, reject) => {
                    const file = files[i];

                    if (this.props.maxSize && !this.validateFileSize(file.size)) {
                        reject("File size bigger than " + this.props.maxSize + "mb");
                    }
                   
                    if (this.props.accept) {
                        const accept = this.props.accept.split(',');
                        const reader = new FileReader();
                    
                        reader.onload = ((e) => {
                            let realType = null;
                            let header = "";
                            const fileBytesArr = (new Uint8Array(e.target.result)).subarray(0, 4);
                    
                            for (let i = 0; i < fileBytesArr.length; i++) {
                                header += fileBytesArr[i].toString(16);
                            }
    
                            realType = this.mimeType(header);
                            if (accept.includes(realType)) {
                                resolve(file);
                            } else {
                                reject("Error! Wrong file type");
                            }
                        });
    
                        reader.onerror = ((error) => {
                            reject(error);
                        });
    
                        reader.readAsArrayBuffer(file);
                    } else {
                        resolve(files);
                    }
                }));
            }

            Promise.all(imagesPromises)
                .then((files) => {
                    this.readFIlesData(files);
                })
                .catch((error) => {
                    if (this.props.getError) {
                        this.props.getError(error);
                    }
                })
        }
    }

    readFIlesData = (files) => {
        if (files.length) {
            const imagesPromises = [];

            for (let i = 0; i < files.length; i++) {
                imagesPromises.push(new Promise((resolve, reject) => {
                    const file = files[i];
                   
                    const reader = new FileReader();
                    
                    reader.onload = ((e) => {
                        resolve(file);
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

    getInputData = () => {
        const files = this.inputRef.current.files;
        this.validateFilesData(files);
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
