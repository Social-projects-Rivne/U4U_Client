import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PhotoSLider from '../../single-place/main-section/place-photos';
import './preview-upload-images.scss';

export default class PreviewUploadImages extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            images: [],
            show: false,
            showPhotoPreview: false,
            showPhotoPreviewAt: 0,
        };
    }

    setImages = (images) => {
        this.setState({ images: images, show: true });
    }

    removeImage = (index) => {
        this.setState(state => {
            const _URL = window.URL || window.webkitURL;
            const images = state.images;
            let show = state.show;
            
            _URL.revokeObjectURL(images[index]);
            this.props.changePreviwImages(index);
            images.splice(index, 1);

            if (!images.length) show = false;

            return {
              images,
              show
            };
        });
    }

    showPreview = (index) => {
        this.setState({ showPhotoPreview: true, showPhotoPreviewAt: index });
    }

    closePreview = () => {
        this.setState({ showPhotoPreview: false, showPhotoPreviewAt: 0 });
    }

    render() {
        const { images, show, showPhotoPreview, showPhotoPreviewAt } = this.state;

        return (
            show
            ?
                <div className='preview-upload-images'>
                    {
                        showPhotoPreview
                        ?   
                            <div className='preview-upload-images-modal'>
                                <PhotoSLider photos={images} startAt={showPhotoPreviewAt}/>
                                <div className='preview-upload-images-modal_close' onClick={() => this.closePreview()}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </div>
                            </div>
                        : null
                    }
                    <div className='preview-upload-images-title'>
                        Images ({images.length}):
                    </div>
                    <div className='preview-upload-images-content'>
                    {
                        images.length
                        ?   
                            images.map((image, i) => {
                                return <div 
                                            key={i} 
                                            className="preview-upload-images-content-image"
                                            >
                                            
                                            <img 
                                                key={image} 
                                                src={image} 
                                                alt=""
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
