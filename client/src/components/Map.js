import React from 'react';

import fakeMap from '../assets/images/map-sample.png';

const Map = ({ gameInfo }) => {
  return (
    <div>
      <h3>{gameInfo.title}</h3>
      <p>
        <span>Exits:</span> West, North, South
      </p>
      <img src={fakeMap} />
      <p>Items In Room:</p>
    </div>
  );
};

export default Map;
