import React from 'react';

const Player = ({ gameInfo }) => {
  return (
    <div>
      <h3>{gameInfo.name}</h3>
      <hr />
    </div>
  );
};

export default Player;
