import React from 'react';

const PlayersInRoom = ({ gameInfo }) => {
  return (
    <div>
      <h3>Players In Room</h3>
      <hr />
      {gameInfo.players &&
        gameInfo.players.map(player => <p key={player}>{player}</p>)}
    </div>
  );
};

export default PlayersInRoom;
