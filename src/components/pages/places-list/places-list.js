import React, { Component } from "react";
import SelectDropdown from "../../utils/select-dropdown/select-dropdown";
import PlacesGrid from "./../../utils/places-grid/";
import ButtonLoadingMore from "./../../utils/button-loading-more";
import PlacesApi from "./../../../services/places-service";
import RegionsNames from "./../../../global-data/regions-names";
import "./places-list.scss";
import Spinner from "./../../utils/spinner";

export default class PlacesList extends Component {
  state = {
    fIlteRatingData: [
      {
        id: 1,
        title: "Top places"
      },
      {
        id: 2,
        title: "Date added"
      }
    ],
    places: null,
    title: "All Ukrainian places",
    ratingFilterValue: null,
    regionsFIlterValue: null,
    regionDbId: null,
    regionsNames: [RegionsNames.title, RegionsNames.regionDbId],
  };

  async getAllRegionPlaces(regionId) {
    try {
      const places = await PlacesApi.getRegionPlaces(regionId);
      const filteredPlaces = places.filter(place => {
        return place.isModerated === true && place.approved === true;
      });

      this.setState({ places: filteredPlaces });
    } catch (error) {
      console.error("Handle loading all places error: ", error);
    }
  }

  async getPlaces() {
    try {
      const places = await PlacesApi.getAllPlaces();
      const filteredPlaces = places.filter(place => {
        return place.isModerated === true && place.approved === true;
      });

      this.setState({ places: filteredPlaces });
    } catch (error) {
      console.error("Handle loading all places error: ", error);
    }
  }

  async filters() {
    try {
      const places = await PlacesApi.getAllPlaces();

      const filteredPlaces = places.filter(place => {
        return (
          this.state.regionDbId !== null
            ? (place.isModerated === true && place.approved === true && place.regionId === this.state.regionDbId)
            : (place.isModerated === true && place.approved === true)
        )
      });

      if (this.state.ratingFilterValue) {
        const { ratingFilterValue } = this.state

        if (ratingFilterValue === "Top places") {
          const sortTop = filteredPlaces.sort((a, b) => a.ratingAvg - b.ratingAvg).reverse()
          this.setState({ places: sortTop });
        } else if (ratingFilterValue === "Date added") {
          const sortTop = filteredPlaces.sort((a, b) => a.createdAt - b.createdAt).reverse()
          this.setState({ places: sortTop });
        }
      } else {
        this.setState({ places: filteredPlaces });
      }
    } catch (error) {
      console.error("Handle loading all places error: ", error);
    }
  }

  isRegionId() {
    if (this.props.location.state) {
      const { regionId } = this.props.location.state;
      if (regionId) {
        this.getAllRegionPlaces(regionId);
      }
    } else {
      this.getPlaces();
    }
  }

  componentDidMount() {
    this.isRegionId();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.regionId !== this.props.match.params.regionId) {
      this.isRegionId();
    }
    if (prevState.regionDbId !== this.state.regionDbId || prevState.ratingFilterValue !== this.state.ratingFilterValue) {
      if (!this.state.regionDbId && this.state.regionDbId !== null) {
        this.getPlaces()
      } else {
        this.filters()
      }
    }
  }

  getFilterValue = data => {
    if (data) {
      if (data.from === "rating") {
        this.setState({ ratingFilterValue: data.value });
      } else if (data.from === "regions") {
        this.setState({ regionsFIlterValue: data.value, regionDbId: data.regionDbId });
      }
    }
  };

  regionsNames() {
    return RegionsNames.filter(e => {
      return e.regionDbId
    })
  }

  regionDataFromMap() {
    if (this.props.location.state) {
      const { regionId } = this.props.location.state
      if (regionId) {
        return RegionsNames.filter(e => {
          return e.regionDbId === regionId
        })
      }
    }
  }

  render() {
    const changeHeight = {
      height: this.state.places ? "auto" : "100%"
    };

    return (
      <div className="places-list" style={changeHeight}>
        <div className="places-list-container">
          <div className="places-list-container-header">
            <div className="places-list-container-header-title">
              <div className="places-list-container-header-title-wp">
                {this.state.ratingFilterValue ? (
                  <div className="places-list-container-header-title-wp-item">
                    Rating: {this.state.ratingFilterValue}
                  </div>
                ) : null}
                {this.state.regionsFIlterValue ? (
                  <div className="places-list-container-header-title-wp-item">
                    Region: {this.state.regionsFIlterValue}
                  </div>
                ) : null}
                {!this.state.ratingFilterValue &&
                  !this.state.regionsFIlterValue ? (
                    <div className="places-list-container-header-title-wp-item">
                      {this.state.title}
                    </div>
                  ) : null}
              </div>
            </div>
            <div className="places-list-container-header-filtres">
              <SelectDropdown
                name="rating"
                data={this.state.fIlteRatingData}
                getSelectValue={this.getFilterValue}
              />
              <SelectDropdown
                name="regions"
                data={this.regionsNames()}
                getSelectValue={this.getFilterValue}
                regionDataFromMap={this.regionDataFromMap()}
              />
            </div>
          </div>
          {
            this.state.places
              ? <div>
                <PlacesGrid places={this.state.places} />
                <div className="places-list-container-load-more">
                  <ButtonLoadingMore />
                </div>
              </div>
              : !this.props.location.state || this.props.location.state.regionId
                ? <Spinner />
                : <h2 className="no-places">Unfortunately, there are no places. Select another region.</h2>
          }
        </div>
      </div>
    );
  }
}
