import React from "react";
import MapContainer from './mapContent/mapContainer'
import rivneRegion from "./mapContent/regions.json";

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
				);
			})}
		</MapContainer>
	);
};

export default MapSvg;
