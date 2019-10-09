import React, { Component } from "react";
import classNames from "classnames";
import "./uMap.scss";
import MapSvg from "./mapContent/mapSvg";
import RegionsName from "./mapContent/regionsName.json";

export default class UMap extends Component {
  state = {
    active: false,
    x: 0,
    y: 0,
    region: ""
  };

  mouseMove = e => {
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

    return (
      <div className="map" id="map">
        <MapSvg mouseMove={this.mouseMove} mouseOut={this.mouseOut} />

        <div className={active} style={style}>
          {regionName}
        </div>
      </div>
    );
  }
}
