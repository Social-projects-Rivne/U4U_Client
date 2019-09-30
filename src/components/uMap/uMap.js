import React from 'react';
import './uMap.scss';
import MapSvg from "./mapSvg.js"

const UMap = () => {
    return (
        <main className="map" id="map">
			<h1 className="map__slogan">
				Make your trip more fun in Ukraine
			</h1>

			<MapSvg />
		
			<div className="description"></div>
		</main>
    )
};

export default UMap;