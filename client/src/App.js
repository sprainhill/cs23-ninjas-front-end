import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Enter from './components/Enter.js';
import Game from './components/Game.js';
import Loading from './components/Loading.js';
import Map from './components/Map';

import tunnelNinjas from './assets/images/tunnelNinjas.svg';
import './scss/index.scss';

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const logout = props => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (localStorage.token) setIsLoggedIn(true);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={tunnelNinjas} alt="Tunnel Ninjas logo" />
      </header>
      {isLoading ? (
        <Loading />
      ) : isLoggedIn ? (
        <div>
          <Game setIsLoading={setIsLoading} props={props} logout={logout} />
          <Route path="/map" component={Map} />
        </div>
      ) : (
        <Enter setIsLoading={setIsLoading} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
