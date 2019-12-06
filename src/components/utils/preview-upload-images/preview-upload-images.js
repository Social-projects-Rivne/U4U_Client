import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PhotoSLider from '../../single-place/main-section/place-photos';
import './preview-upload-images.scss';

export default class PreviewUploadImages extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            blobs: [],
            show: false,
            showPhotoPreview: false,
            showPhotoPreviewAt: 0,
        };
    }

    setImages = (files) => {
        if (files.length) {
            let blobs = [];

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const url = window.URL || window.webkitURL;
                const src = url.createObjectURL(file);

                const img = new Image();
                      img.src = src;

                blobs.push(img.src);
            }
            
            this.setState({ blobs: blobs, show: true });
        }
    }

    removeImage = (index) => {
        this.setState(state => {
            const _URL = window.URL || window.webkitURL;
            let blobs = state.blobs;
            let show = state.show;
            
            _URL.revokeObjectURL(blobs[index]);
            blobs.splice(index, 1);
            this.props.removePreviwImage(index);

            if (!blobs.length) show = false;

            return {
                blobs,
                show
            };
        });
    }

    reset = () => {
        this.setState({ blobs: [], show: false });
    }

    showPreview = (index) => {
        this.setState({ showPhotoPreview: true, showPhotoPreviewAt: index });
    }

    closePreview = () => {
        this.setState({ showPhotoPreview: false, showPhotoPreviewAt: 0 });
    }

    render() {
        const { blobs, show, showPhotoPreview, showPhotoPreviewAt } = this.state;

        return (
            show
            ?
                <div className='preview-upload-images'>
                    {
                        showPhotoPreview
                        ?   
                            <div className='preview-upload-images-modal'>
                                <PhotoSLider photos={blobs} startAt={showPhotoPreviewAt}/>
                                <div className='preview-upload-images-modal_close' onClick={() => this.closePreview()}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </div>
                            </div>
                        : null
                    }
                    <div className='preview-upload-images-title'>
                        Images ({blobs.length}):
                    </div>
                    <div className='preview-upload-images-content'>
                    {
                        blobs.length
                        ?   
                            blobs.map((blob, i) => {
                                return <div 
                                        key={i} 
                                        className="preview-upload-images-content-image"
                                        >
                                        
                                        <img 
                                            key={blob} 
                                            src={blob} 
                                            alt=""
                                            loading="lazy"
                                            onClick={(e) => this.showPreview(i)}/>

                                        <div 
                                            className="preview-upload-images-content-image_remove" 
                                            onClick={(e) => this.removeImage(i)}>
                                            <FontAwesomeIcon icon={faTimes} />

                                        </div>
                                    </div>
                            })
                        : null
                    }
                    </div>
                </div>
            : null
        )
    }
}
