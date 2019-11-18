import React from 'react';
import { Route } from 'react-router-dom';
import Enter from './components/Enter.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tunnel Ninjas</h1>
      </header>
      <Route exact path="/" component={Enter} />
    </div>
  );
}

export default App;
