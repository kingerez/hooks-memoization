import React, { useState, useCallback } from 'react';
import './App.css';
import { ColorClicker } from './ColorClicker';
import { randomizeColor, randomizeName } from '../utils';
import { NameClicker, MemoizedNameClicker } from './NameClicker';

const App = () => {
  const [color, setRandomColor] = useState('white');
  const [name, setRandomName]= useState('Erez');

  const handleNameChange = useCallback(() => setRandomName(randomizeName()), []);

  return (
    <div className="App">
      <h1>By Hook or by Crook!</h1>
      <div className="buttons">
        <ColorClicker color={color} colorChangeHandler={() => setRandomColor(randomizeColor())} />
        <MemoizedNameClicker name={name} nameChangeHandler={handleNameChange} />
      </div>
      <h3 className="output" style={{color}}>{name}</h3>
    </div>
  );
}

export default App;
