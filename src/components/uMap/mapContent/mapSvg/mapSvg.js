import React, { Component } from "react";
import classNames from "classnames";
import MapContainer from "../mapContainer";
import Regions from "./../regions.json";
import { Redirect } from 'react-router-dom'


export default class MapSvg extends Component {
  state = {
    hover: null,
    toPlacesList: false,
    regionId: null
  };

  mouseEnter = e => {
    this.setState({
      hover: e.target.id
    });
  };

  mouseLeave = e => {
    this.setState({
      hover: null
    });
  };

  handleOnClick = id => {
    this.setState({
      toPlacesList: true,
      regionId: id
    });
  };

  render() {
    const { toPlacesList, regionId } = this.state;
    if (toPlacesList) {
      return <Redirect to={`/places-list/filter/${regionId}`} />;
    }

    return (
      <MapContainer onImagesLoaded={this.props.onImagesLoaded}>
        {Regions.map(region => {
          const hover = classNames({
            " blur": this.state.hover !== null && this.state.hover !== region.id
          });

          return (
            <path
              {...region}
              key={region.id}
              onClick={() => this.handleOnClick(region._id)}
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              className={region.className + hover}
              onMouseMove={this.props.mouseMove}
              onMouseOut={this.props.mouseOut}
            />
          );
        })}
      </MapContainer>
    );
  }
}
