import React, { Component } from "react";
import MapContainer from "./../mapContainer";
import rivneRegion from "./../regions.json";

export default class MapSvg extends Component {
	state = {
		// hover: false,
		cHover: null
	}

	mouseEnter = (e) => {
		this.setState({
			// hover: true,
			cHover: e.target.id
		})
	}

	mouseLeave = (e) => {
		this.setState({
			// hover: false,
			cHover: null
		})
	}

	render() {
		return (
			<MapContainer>
				{rivneRegion.map(region => {
					let hoverEffect = '';
					if (this.state.cHover !== null) {
						if (this.state.cHover === region.id) hoverEffect = ''
						else hoverEffect = 'blur'
					}

					return (
						<path
							{...region}
							key={region.id}
							onClick={() => alert(`redirect to ${region.id}`)}
							onMouseEnter={this.mouseEnter}
							onMouseLeave={this.mouseLeave}
							className={`${region.className} ${hoverEffect}`}
							onMouseMove={this.props.mouseMove}
							onMouseOut={this.props.mouseOut}
						/>
					)
				})}
			</MapContainer>
		);
	}
}