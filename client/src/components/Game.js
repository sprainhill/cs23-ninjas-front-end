import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth.js';

const Game = ({ logout }) => {
  const [gameInfo, setGameInfo] = useState({});

  const initGame = () => {
    return axiosWithAuth()
      .get('api/adv/init/')
      .then(res => {
        console.log(res.data);
        setGameInfo(res.data);
      })
      .catch(err => console.log(err));
  };

  const move = cardinal => {
    const direction = { direction: `${cardinal}` };
    return axiosWithAuth()
      .post('api/adv/move/', direction)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    initGame();
  }, []);

  return (
    <div>
      <h2>Welcome to the Tunnels {gameInfo.name}!</h2>
      <h3>Room: {gameInfo.title}</h3>
      <p>{gameInfo.description}</p>
      <input type="text" placeholder="Type commands here:" />
      <h4>Players Online:</h4>
      <ul>
        {gameInfo.players &&
          gameInfo.players.map(player => <li key={player}>{player}</li>)}
      </ul>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Game;
