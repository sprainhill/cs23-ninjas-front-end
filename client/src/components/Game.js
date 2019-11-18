import React from 'react';

const Game = ({ logout }) => {
  return (
    <div>
      <h2>Game is here!</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Game;
