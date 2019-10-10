import React, { Component } from "react";
import classNames from "classnames";
import "./uMap.scss";
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