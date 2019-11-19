import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth.js';

import Player from './Player.js';
import MapDisplay from './MapDisplay';
import Input from './Input.js';
import PlayersInRoom from './PlayersInRoom.js';
import Chat from './Chat.js';
import Loading from './Loading.js';

const Game = ({ logout }) => {
  const [gameInfo, setGameInfo] = useState(null);
  const [direction, setDirection] = useState('');
  const [commands, setCommands] = useState(null);

  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const direction = { direction: `${cardinal}` };
    return axiosWithAuth()
      .post('api/adv/move/', direction)
      .then(res => {
        console.log(res);
        setGameInfo(res.data);
        setLoading(false);
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
  if (gameInfo) {
    return (
      <div className="game-container">
        <div className="column side">
          <div className="box map">
            <MapDisplay gameInfo={gameInfo} />
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
            {loading ? (
              <Loading />
            ) : (
              <Input
                direction={direction}
                setDirection={setDirection}
                move={move}
              />
            )}
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
  } else {
    return <Loading />;
  }
};

export default Game;
