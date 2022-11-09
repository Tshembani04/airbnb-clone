import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { markAssetError } from "next/dist/client/route-loader";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/oxredpill/cla9ekzbm004v15n732ydlbx9"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
            role='img'
            aria-label="push-pin"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-xl animate-bounce "
            >
              📌
            </p>
          </Marker>
{selectedLocation.long === result.long ? (
  <Popup
  onClose={()=> setSelectedLocation({})}
  closeOnClick={true}
  latitude={result.lat}
  longitude={result.long}
  className="w-full h-8 px-16 "
  >
    {result.title}
  </Popup>
): (
false
)}

        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
