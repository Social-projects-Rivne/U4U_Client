import React, { Component } from "react";
import RegionsService from '../../../services/regions-service';
import Api from '../../../services/places-service';
import SelectDropdown from '../../utils/select-dropdown/select-dropdown';
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
      filesValue: ''
    }
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
      data.append("photo", photo);
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
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.addPlace()
    this.setState({
      title: '',
      description: '',
      selectedPhotos: [],
      filesValue: ''
    })
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedPhotos: event.target.files,
      filesValue: event.target.value
    })
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
      <div className="add-place white-layout">
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
          <div className="add-place-file-submit">
            <input className="add-place-file"
              type="file"
              value={this.state.filesValue}
              multiple
              required
              onChange={this.fileSelectedHandler} />
            <input className="add-place-submit global-raised-button"
              type='submit' value='Add new place'
            />
          </div>
        </form>
      </div>
    );
  }
}
