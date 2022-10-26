import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { decrement, increment, RootState } from './store';
import { useDispatch } from 'react-redux';

function App() {

  const counterValue = useSelector((state: RootState) => state.value)
  const dispath = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <span>{counterValue}</span>
      </header>
      <button onClick={() => dispath(increment())}>Increment</button>
      <button onClick={() => dispath(decrement())}>Increment</button>
    </div>
  );
}

export default App;
