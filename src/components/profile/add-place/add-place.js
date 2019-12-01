import React, { Component } from "react";
import RegionsService from '../../../services/regions-service';
import Api from '../../../services/places-service';
import SelectDropdown from '../../utils/select-dropdown/select-dropdown';
import InputUploadUmages from './../../utils/input-upload-images';
import PreviewUploadImages from './../../utils/preview-upload-images';
import "./add-place.scss";

export default class AddPlace extends Component {
  constructor() {
    super();
    this.regionsService = new RegionsService();
    this.state = {
      regionsList: [],
      title: '',
      description: '',
      isModerated: false,
      regionId: '',
      selectedPhotos: [],
    }

    this.InputUploadUmages = React.createRef();
    this.PreviewUploadImages = React.createRef();
  }

  componentDidMount() {
    this.getRegionsList();
  }

  getRegionsList = () => {
    this.regionsService.getRegionsList().then((regions) => {
      this.setState({ regionsList: regions })
    }).catch((error) => {
      console.log(error)
    })
  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  handleSelectRegion = (data) => {
    this.setState({ region: data.value });
  }
  

  addPlace = () => {
    const { title, region, isModerated, description, selectedPhotos, regionsList } = this.state;
  
    const data = new FormData();
    for (let photo of selectedPhotos) {
      data.append("photo", new File([photo.src], (+new Date())+ ".jpg"));
    }
    data.append("title", title)
    data.append("region", region)
    data.append("isModerated", isModerated)
    data.append("description", description)
    let city = regionsList.find(city => {
      return city.name.trim() === region.trim()
    }
    )
    data.append("regionId", city._id)
    Api.postNewPlace(data)
    console.log(data.getAll("photo"))

    this.setState({
      title: '',
      description: '',
      selectedPhotos: [],
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.addPlace()
  }

  changePreviwImages = (index) => {
    // this.setState(prevState => ({
    //   selectedPhotos: {
    //       ...prevState.fields,
    //       selectedPhotos: delete prevState.selectedPhotos[index]
    //   }
    // }));
    this.setState(state => {
      const selectedPhotos = state.selectedPhotos;
      delete selectedPhotos[index];
      console.log(selectedPhotos)
     
      return {
        selectedPhotos,
      };
    });
  }

  inputGetPhotos = (data) => {
    this.setState({ selectedPhotos: data })
  }

  render() {
    const { regionsList } = this.state;
    const regions = regionsList.map((region) => {
      return {
        id: region._id,
        title: region.name
      }
    })

    return (
      <div className="add-place global-white-layout">
        <form className="add-place-form"
          onSubmit={this.handleSubmit}>
          <h1 className="add-place-header">Add your place</h1>
          <SelectDropdown
            name='Choose a region'
            data={regions}
            getSelectValue={this.handleSelectRegion}
          />
          <input className="add-place-title global-input-text"
            required
            placeholder = 'Place name'
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <textarea
            required
            placeholder = 'Place description'
            className="add-place-description global-textarea"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            cols="30"
            rows="10"
          ></textarea>
          <div className="">
            <PreviewUploadImages 
              ref={this.PreviewUploadImages}
              changePreviwImages={this.changePreviwImages}/>
          </div>
          <div className="add-place-file-submit">
            <InputUploadUmages 
              ref={this.InputUploadUmages} 
              preview={this.PreviewUploadImages}
              inputGetPhotos={this.inputGetPhotos}/>
            <input className="add-place-submit global-raised-button"
              type='submit' value='Add new place'
            />
          </div>
        </form>
      </div>
    );
  }
}
