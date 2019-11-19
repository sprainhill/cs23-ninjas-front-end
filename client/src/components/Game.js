import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth.js';

import Player from './Player.js';
import Map from './Map.js';
import Input from './Input.js';
import PlayersInRoom from './PlayersInRoom.js';
import Chat from './Chat.js';

const Game = ({ logout }) => {
  const [gameInfo, setGameInfo] = useState({});
  const [direction, setDirection] = useState('');
  const [commands, setCommands] = useState(null);

  const handleChange = e => {
    setDirection(e.target.value);
  };

  const initGame = () => {
    return axiosWithAuth()
      .get('api/adv/init/')
      .then(res => {
        console.log(res.data);
        let roomObj = {
          type: 'room',
          text: `${res.data.description}`
        };
        setGameInfo(res.data);
        setCommands([roomObj]);
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
        let moveObj = {
          type: 'move',
          text: `You walk ${
            cardinal === 'n'
              ? 'north'
              : cardinal === 's'
              ? 'south'
              : cardinal === 'w'
              ? 'west'
              : cardinal === 'e'
              ? 'east'
              : '... nowhere'
          }`
        };
        let roomObj = {
          type: 'room',
          text: `${res.data.description}`
        };
        setCommands([...commands, moveObj, roomObj]);
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
          <Map gameInfo={gameInfo} />
        </div>
        <div className="box player-info">
          <Player gameInfo={gameInfo} />
        </div>
      </div>
      <div className="column middle">
        <div className="box game-info">
          {commands &&
            commands.map(command => {
              if (command.type === 'move') {
                return <p className="move-info-text">{command.text}</p>;
              } else if (command.type === 'room') {
                return <p className="room-info-text">{command.text}</p>;
              }
            })}
        </div>
        <div className="box command-input">
          <Input
            direction={direction}
            handleChange={handleChange}
            move={move}
          />
        </div>
      </div>
      <div className="column side">
        <div className="box players-online">
          <PlayersInRoom gameInfo={gameInfo} />
        </div>
        <div className="box chat">
          <Chat logout={logout} />
        </div>
      </div>
    </div>
  );
};

export default Game;
