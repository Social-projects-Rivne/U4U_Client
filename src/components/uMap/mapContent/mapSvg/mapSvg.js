import React, { Component } from "react";
import classNames from 'classnames';
import MapContainer from "../mapContainer";
import Regions from "./../regions.json";

export default class MapSvg extends Component {
	state = {
		hover: null
	}

	mouseEnter = (e) => {
		this.setState({
			hover: e.target.id
		})
	}

	mouseLeave = (e) => {
		this.setState({
			hover: null
		})
	}

	render() {
		return (
			<MapContainer>
				{Regions.map(region => {
					const hover = classNames({
						' blur': (this.state.hover !== null) && (this.state.hover !== region.id)
					})

					return (
						<path
							{...region}
							key={region.id}
							onClick={() => alert(`redirect to ${region.id}`)}
							onMouseEnter={this.mouseEnter}
							onMouseLeave={this.mouseLeave}
							className={region.className + hover}
							onMouseMove={this.props.mouseMove}
							onMouseOut={this.props.mouseOut}
						/>
					)
				})}
			</MapContainer>
		);
	}
}