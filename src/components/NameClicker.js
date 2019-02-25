import React from 'react';

export const NameClicker = (props) => {
  const {name, nameChangeHandler} = props;
  console.log('%cNameClicker rendered!', 'font-size:25px');
  return (
    <div className="section-container">
      <button className="btn" onClick={nameChangeHandler}>Randomize name</button>
      <div className="picked-name">{name}</div>
    </div>
  );
};
