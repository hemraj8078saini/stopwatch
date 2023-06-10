import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setTime(0);
  };

  return (
    <div>
      <center><h1>Stopwatch</h1>
      <p>Time: {time} seconds</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      <h1>Please try it</h1>
      </center>
    </div>
  );
};


export default App;
