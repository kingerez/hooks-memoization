import React from 'react';

export const ColorClicker = (props) => {
  const { color, colorChangeHandler } = props;

  return (
    <div className="section-container">
      <button className="btn" onClick={colorChangeHandler}>Randomize color</button>
      <div className="picked-color" style={{ backgroundColor: color }}>{color}</div>
    </div>
  );
};
