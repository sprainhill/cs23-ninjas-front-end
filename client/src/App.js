import React from 'react';
import { Route } from 'react-router-dom';

import Enter from './components/Enter.js';
import Game from './components/Game.js';

import tunnelNinjas from './assets/images/tunnelNinjas.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={tunnelNinjas} alt="Tunnel Ninjas logo" />
      </header>
      <Route exact path="/" component={Enter} />
      <Route exact path="/play" component={Game} />
    </div>
  );
}

export default App;
