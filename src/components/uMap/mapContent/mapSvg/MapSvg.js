import React from "react";
import MapContainer from "./../mapContainer";
import rivneRegion from "./../regions.json";

const MapSvg = () => {
	return (
		<MapContainer>
			{rivneRegion.map(region => {
				return (
					<path
						{...region}
						key={region.id}
						onClick={()=>alert(`redirect to ${region.id}`)
						}
					/>
				)
			})}
		</MapContainer>
	);
};

export default MapSvg;