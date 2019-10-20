import React, { Component } from "react";
import classNames from "classnames";
import "./uMap.scss";
import MapSvg from "./mapContent/mapSvg";
import RegionsName from "./mapContent/regionsName.json";
import Spiner from "../utils/spinner";

export default class UMap extends Component {
  state = {
    active: false,
    x: 0,
    y: 0,
    region: "",
    imagesLoadState: false
  };

  mouseMove = (e) => {
    this.setState({
      active: true,
      x: e.clientX,
      y: e.clientY,
      region: e.target.id
    });
  };

  mouseOut = () => {
    this.setState({
      active: !this.state.active,
      x: 0,
      y: 0
    });
  };

  setImagesLoadState = (state) => {
    this.setState({ imagesLoadState: state })
  }

  render() {
    const { x, y, imagesLoadState } = this.state;
    const clientHeight = document.documentElement.clientHeight;
    const style = {
      top: y,
      left: x
    };

    const active = classNames({
      description: true,
      activeTop: this.state.active && this.state.y < clientHeight / 2,
      activeBot: this.state.active && this.state.y > clientHeight / 2
    });

    const { regionName } =
      RegionsName.find(name => {
        return this.state.region === name.id;
      }) || {};

    const spinerModifier = (imagesLoadState) ? '' : ' show'
    const mapModifier = (imagesLoadState) ? ' show' : ''

    return (
      <div className="map" id="map">
        <div className={`map__spiner${spinerModifier}`}>
          <Spiner />
        </div>

        <div className={`map__svg${mapModifier}`}>
          <MapSvg
            mouseMove={this.mouseMove}
            mouseOut={this.mouseOut}
            onImagesLoaded={this.setImagesLoadState} />
        </div>

        <div className={active} style={style}>
          {regionName}
        </div>
      </div>
    );
  }
}
