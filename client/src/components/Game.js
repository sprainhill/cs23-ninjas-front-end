import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth.js';

import fakeMap from '../assets/images/map-sample.png';

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
    <div className="game-container">
      <div className="column side">
        <div className="box map">
          <h3>{gameInfo.title}</h3>
          <p>
            <span>Exits:</span> West, North, South
          </p>
          <img src={fakeMap} />
          <p>Items In Room:</p>
        </div>
        <div className="box player-info">
          <h3>{gameInfo.name}</h3>
          <hr />
        </div>
      </div>
      <div className="column middle">
        <div className="box game-info">
          <p className="room-info-text">{gameInfo.title}</p>
          <p className="room-info-text">{gameInfo.description}</p>
          {gameInfo.error_msg && <p>{gameInfo.error_msg}</p>}
        </div>
        <div className="box command-input">
          <form onSubmit={e => move(e, direction)}>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Type commands here:"
              value={direction}
            />
          </form>
        </div>
      </div>
      <div className="column side">
        <div className="box players-online">
          <h3>Players In Room</h3>
          <hr />
          {gameInfo.players &&
            gameInfo.players.map(player => <p key={player}>{player}</p>)}
        </div>
        <div className="box chat">
          <h3>Chat</h3>
          <hr />
          <button onClick={logout}>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Game;
