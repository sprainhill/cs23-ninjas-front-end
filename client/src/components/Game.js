import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth.js';

const Game = ({ logout }) => {
  const [gameInfo, setGameInfo] = useState({});

  const [direction, setDirection] = useState('');

  const handleChange = e => {
    setDirection(e.target.value);
  };

  const initGame = () => {
    return axiosWithAuth()
      .get('api/adv/init/')
      .then(res => {
        console.log(res.data);
        setGameInfo(res.data);
      })
      .catch(err => console.log(err));
  };

  const move = (e, cardinal) => {
    e.preventDefault();
    const direction = { direction: `${cardinal}` };

    return axiosWithAuth()
      .post('api/adv/move/', direction)
      .then(res => {
        console.log(res);
        setGameInfo(res.data);
        setDirection('');
      })
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
      {gameInfo.error_msg && <p>{gameInfo.error_msg}</p>}
      <form onSubmit={e => move(e, direction)}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Type commands here:"
          value={direction}
        />
      </form>

      <h4>Players In Room:</h4>
      <ul>
        {gameInfo.players &&
          gameInfo.players.map(player => <li key={player}>{player}</li>)}
      </ul>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Game;
