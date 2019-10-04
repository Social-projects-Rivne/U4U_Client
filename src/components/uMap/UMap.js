import React, { Component } from "react";
import "./UMap.scss";
import MapSvg from "./mapContent/mapSvg";

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
    const style = {
      top: y, left: x
    }

    const active = (this.state.active) ? 'active' : ''

    const region = (this.state.region !== 'Kyiv_City' && this.state.region !== 'Sevastopol_City')
      ? `${this.state.region} region.`
      : this.state.region.replace("_", " ")   

    return (
      <main className="map" id="map">
        <MapSvg
          mouseMove={this.mouseMove}
          mouseOut={this.mouseOut}
        />

        <div className={`description ${active}`} style={style}>
          {region}
        </div>
      </main>
    );
  }
}