import React from 'react';
import CountdownTimer from './CountdownTimer';
import './App.css';
function App() {
  return (
    <div className="App">
      <CountdownTimer initialTime={30} />
    </div>
  );
}

export default App;
