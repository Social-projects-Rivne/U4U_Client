import React from "react";
import "./UMap.scss";
import MapSvg from "./mapContent/mapSvg";

const UMap = () => {
  return (
    <main className="map" id="map">
      <MapSvg />

      <div className="description"></div>
    </main>
  );
};

export default UMap;