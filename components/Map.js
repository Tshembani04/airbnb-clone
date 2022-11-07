import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: -100,
    latitude: 40,
    zoom: 3.5,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/oxredpill/cla75xii7001014pdo1fgwpas"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
    ></ReactMapGL>
  );
}

export default Map;
