import { render } from '@testing-library/react';
import { update } from 'lodash';
import React, { useEffect, useState } from "react";
//import React, { Component } from 'react';
import Card from './components/Card'

let arr = []

function App() {

  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  function updateScore() {
    let newScore = score + 1
    arr.push(newScore)
    setScore(newScore);
    setHighScore(Math.max(...arr))
   
  }


  function resetScore() {
    console.log("function called")
    setScore(prevState => {
      return prevState - prevState
    })
    console.log(score)
  }

 

  return (
    <div className='container'>
      
      <div className='headerWrapper'>
        <div className="header">
          The Memory Game!
        </div>
        <div className='score'>
          Score: {score}
          High Score: {highScore}
        </div>

      </div>
    
      <div className='board'>
        <Card updateScore={updateScore} resetScore={resetScore}/>
      </div>

    </div>

  );
}

export default App;
