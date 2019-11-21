import React from 'react';

import MapSample from './MapSample';

const MapDisplay = ({ mapRooms, gameInfo }) => {
  return (
    <div>
      <h3>{gameInfo.title}</h3>
      <p>
        <span>Exits:</span> West, North, South
      </p>
      <div className="map-container">
        <MapSample mapRooms={mapRooms} gameInfo={gameInfo} />
      </div>

      <p>Items In Room:</p>
    </div>
  );
};

export default MapDisplay;
