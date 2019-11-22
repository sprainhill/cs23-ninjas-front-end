import React from 'react';

const Player = ({ gameInfo }) => {
  return (
    <div>
      <h3>{gameInfo.name}</h3>
      <hr />
      <div className="inventory">
        <p>
          <span className="bold">Inventory:</span>
        </p>
        <p>1 X Pipe Wrench</p>
        <p>2 X Health Vials</p>
      </div>
      <div className="player-health">
        <p>HP</p>
        <div className="health-bar"></div>
      </div>
    </div>
  );
};

export default Player;
