import React, { Component } from "react";
import classNames from 'classnames';
import "./UMap.scss";
import MapSvg from "./mapContent/mapSvg";
import RegionsName from './mapContent/regionsName.json'

export default class UMap extends Component {
  state = {
    active: false,
    x: 0,
    y: 0,
    region: ''
  }

  mouseMove = (e) => {
    this.setState({
      active: true,
      x: e.clientX,
      y: e.clientY,
      region: e.target.id
    })
  }

  mouseOut = () => {
    this.setState({
      active: !this.state.active,
      x: 0,
      y: 0
    })
  }

  render() {
    const { x, y } = this.state;
    const clientHeight = document.documentElement.clientHeight
    const style = {
      top: (y > clientHeight / 2) ? y * .85 : y,
      left: x
    }

    const active = classNames({
      'description': true,
      'active': this.state.active
    })

    let regionName = '';
    RegionsName.map(name => {
      if (name.id === this.state.region) regionName = name.regionName
    })

    return (
      <div className="map" id="map">
        <MapSvg
          mouseMove={this.mouseMove}
          mouseOut={this.mouseOut}
        />

        <div className={active} style={style}>
          {regionName}
        </div>
      </div>
    );
  }
}