import React, { useState, useCallback } from 'react';
import './App.css';
import { ColorClicker } from './ColorClicker';
import { randomizeColor, randomizeName } from '../utils';
import { NameClicker } from './NameClicker';

const App = () => {
  const [color, setRandomColor] = useState('white');
  const [name, setRandomName]= useState('Erez');

  return (
    <div className="App">
      <h1>By Hook or by Crook!</h1>
      <div className="buttons">
        <ColorClicker color={color} colorChangeHandler={() => setRandomColor(randomizeColor())} />
        <NameClicker name={name} nameChangeHandler={() => setRandomName(randomizeName())} />
      </div>
      <h3 className="output" style={{color}}>{name}</h3>
    </div>
  );
}

export default App;
