import React, { Component } from "react";
import RegionsService from '../../../services/regions-service';
import Api from '../../../services/places-service';
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
      regionId: ''
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

  addPlace = (placeInfo) => {
    const newPlaceInfo = {
      isModerated: false,
      title: placeInfo.title,
      description: placeInfo.description,
      regionId: (() => {
        let region;
        placeInfo.regionsList.find(city => {
          if (city.name.trim() === placeInfo.region.trim()) {
            return region = city
          }
        }
        )
        return region._id
      })()
    }
    Api.postNewPlace(newPlaceInfo)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.addPlace(this.state)
    this.setState({
      title: '',
      description: ''
    })
  }

  render() {
    const { regionsList } = this.state;
    const elements = regionsList.map((item) => {
      return (<option key={item._id}>
        {item.name}
      </option>)
    })
    return (
      <div className="add-place">
        <form className="add-place-form"
          onSubmit={this.handleSubmit}>
          <h1 className="add-place-header">Add your place</h1>
          <select className="district-selector"
            name="region"
            required
            value={this.state.region}
            onChange={this.handleChange}>
            {elements}
          </select>
          <input className="add-place-title"
            required
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <textarea
            required
            class="add-place-description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            cols="30"
            rows="10"
          ></textarea>
          <div className="add-place-file-submit">
            <input className="add-place-file" type="file" />
            <input className="add-place-submit" type='submit' value='send' />
          </div>

        </form>
      </div>
    );
  }
}
