import React from "react";
import "./place-description.scss";

const PlaceName = ({ placeInfo }) => {
  return (
    <div className="article">
      <p>{placeInfo}</p>
    </div>
  );
};
export default PlaceName;
