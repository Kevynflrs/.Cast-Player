import React from 'react';
import Player from './components/Player';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Lecteur de fichiers .cast</h1>
      <Player src="https://asciinema.org/a/505530.cast" />
    </div>
  );
}

export default App;