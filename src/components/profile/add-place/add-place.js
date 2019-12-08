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
      districtsList:[],
      selectedDistricts:[],
      title: '',
      description: '',
      isModerated: false,
      regionId: '',
      selectedPhotos: [],
      filesValue: '',
      regionsError:''
    }
  }

  componentDidMount() {
    this.getRegionsList();
    this.getDistrictsList();
  }

  getRegionsList = () => {
    this.regionsService.getRegionsList().then((regions) => {
      this.setState({ regionsList: regions })
    }).catch((error) => {
      console.log(error)
    })
  }

  getDistrictsList = () => {
    this.regionsService.getDistrictsList().then((districts) => {
      this.setState({ districtsList : districts})
    }).catch((error) => {
      console.log(error)
    })
  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  handleSelectRegion = (data) => {
    this.setState({ region: data.value, regionsError:''});
  }
  handleSelectDistrict = (data) => {
    this.setState({district: data.value, regionsError:''})
  }
  addPlace = () => {
    const { title, region, district, isModerated,
            description, selectedPhotos, regionsList, districtsList, regionsError} = this.state;
    if (!region||!district) {
      this.setState({ regionsError: "Pleace select items from the lists above" });
  
    }
    if (regionsError) return;
    const data = new FormData();
    for (let photo of selectedPhotos) {
      data.append("photo", photo);
    }
    data.append("title", title);
    data.append("region", region);
    data.append("district", district);
    data.append("isModerated", isModerated);
    data.append("description", description);
    let city = regionsList.find(city => {
      return city.name.trim() === region.trim()
    }
    )
    let district_id = districtsList.find(dist => {
      return dist.name.trim() === district.trim()
    }
    )
    data.append("regionId", city._id);
    data.append("districtId", district_id._id);
    data.append("districtRegionId", district_id.regionId)
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
    const { regionsList, districtsList , regionsError} = this.state;
    const regions = regionsList.map((region) => {
      return {
        id: region._id,
        title: region.name
      }
    })
    const districts = districtsList.map((district) => {
      return {
        title: district.name,
        id: district._id,
        regionId: district.regionId
      }
    })

    return (
      <div className="add-place global-white-layout">
        <form className="add-place-form"
          onSubmit={this.handleSubmit}>
          <h1 className="add-place-header">Add your place</h1>
          <div id = 'select-list'>
          <SelectDropdown
            name='Choose a region'
            data={regions}
            getSelectValue={this.handleSelectRegion}
          />
          <SelectDropdown
            name='Choose a district'
            data={districts}
            getSelectValue={this.handleSelectDistrict}
          />
          </div>
          {regionsError ? <div className="add-place-region-district-error">{regionsError}</div> : null}
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
