import React from 'react';

import fakeMap from '../assets/images/map-sample.png';
import MapSample from './MapSample';

const MapDisplay = ({ gameInfo }) => {
  return (
    <div>
      <h3>{gameInfo.title}</h3>
      <p>
        <span>Exits:</span> West, North, South
      </p>
      <div className="map-container">
        <MapSample />
      </div>

      <p>Items In Room:</p>
    </div>
  );
};

export default MapDisplay;
