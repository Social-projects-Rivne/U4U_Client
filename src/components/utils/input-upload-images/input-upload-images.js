import React, { Component } from 'react';
import './input-upload-images.scss';
import { async } from 'q';

export default class InputUploadImages extends Component {
    constructor(props) {
        super(props);
     
        this.state = {};

        this.images = [];
        this.PreviewUploadImages = props.preview;
        this.inputRef = React.createRef();
    }

    getInputData = () => {
        const files = this.inputRef.current.files;

        if (files.length) {
            const imagesPromises = [];

            for (var i = 0; i < files.length; i++) {
                const file = files[i];

                imagesPromises.push(new Promise(function (resolve, reject) {
                    const _URL = window.URL || window.webkitURL;
                    const src = _URL.createObjectURL(file);
                    const img = new Image();

                    img.onload = (e) => {
                        resolve(img);
                    };

                    img.onerror = (error) => {
                        reject(error);
                        _URL.revokeObjectURL(src);
                    };

                    img.src = src;
                }));
            }

            Promise.all(imagesPromises)
                .then((images) => {
                    this.props.inputGetPhotos(images);
                    //this.PreviewUploadImages.current.setImages(images);
                })
                .catch((error) => {
                    console.log("Handle readUploadedImages exeption: ", error);
                })
        }
    }

    render() {
        return (
            <div className='input-upload-images'>
                <input type="file"
                    name="file"
                    id="file"
                    className="input-upload-images__input" 
                    ref={this.inputRef}
                    onChange={this.getInputData}
                    multiple
                    />

                <label for="file"
                    className="input-upload-images__label global-raised-button">
                        Choose a files
                </label>
            </div>
        )
    }
}
