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
    setImageCount: null
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

  countHandler = (count) => {
    this.setState(({ setImageCount }) => {
      return {
        setImageCount: count
      }
    })
  }

  render() {
    const { x, y } = this.state;
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

    const onMapLoading = (this.state.setImageCount === 59) ? '' : ' show'
    const onMapLoaded = (this.state.setImageCount === 59) ? ' show' : ''

    return (
      <div className="map" id="map">
        <div className={`map__spiner${onMapLoading}`}>
          <Spiner />
        </div>

        <div className={`map__svg${onMapLoaded}`}>
          <MapSvg
            mouseMove={this.mouseMove}
            mouseOut={this.mouseOut}
            setImageCount={this.countHandler} />
        </div>

        <div className={active} style={style}>
          {regionName}
        </div>
      </div>
    );
  }
}
