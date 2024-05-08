import React, { useState } from 'react';
import './css/VSplayer.css';

function VSplayer() {
  const [boxes, setBoxes] = useState(Array(9).fill(''));
  const [turnO, setTurnO] = useState(true);
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState('');
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const TheWinner = () => {
    if (winner === 'O') {
      return player1;
    } else {
      return player2;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic for handling player name submission if needed
    document.getElementById('gameDetails').style.display = 'unset';
    document.getElementById('playerDetails').style.display = 'none';
    
  };

  const handleClick = (index) => {
    if (boxes[index] === '') {
      const newBoxes = [...boxes];
      newBoxes[index] = turnO ? 'O' : 'X';
      setBoxes(newBoxes);
      setTurnO(!turnO);
      setCount(count + 1);
      checkWinner(newBoxes, index);
    }
  };

  const checkWinner = (boxes, index) => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (boxes[a] !== '' && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        setWinner(boxes[a]);
        return;
      }
    }
    if (count === 8) {
      setWinner('Draw');
    }
  };

  const resetGame = () => {
    setBoxes(Array(9).fill(''));
    setTurnO(true);
    setCount(0);
    setWinner('');
    document.getElementById('gameDetails').style.display = 'none';
    document.getElementById('playerDetails').style.display = 'unset';
  };

  return (
    <div>
      {/*  */}
      <div id='playerDetails' style={{display:"unset"}}>
        <h1 className='headingPlayer'>Players Name</h1>
        <div className='playerHolder'>
          <label className='playerName'>Player1:</label>
          <input type="text" className='playerinput' value={player1} onChange={(e) => setPlayer1(e.target.value)} />
        </div>
        <div className='playerHolder'>
          <label className='playerName'>Player2:</label>
          <input type="text" className='playerinput' value={player2} onChange={(e) => setPlayer2(e.target.value)} />

        </div>
        <button className='playerNameSubmitBt' onClick={handleSubmit}>Submit</button>
      </div>

      {/*  */}

      <div id='gameDetails' style={{display:"none"}}>

      <div className={`winner-holding ${winner ? '' : 'hide'}`}>
        <p className="winner-text">Winner: {TheWinner()}</p>
        <button className="restart-game" onClick={resetGame}>Play Again</button>
      </div>

      {/*  */}

      <div className="container">
        <div className="game">
          {boxes.map((value, index) => (
            <button className="but" key={index} onClick={() => handleClick(index)}>{value}</button>
          ))}
        </div>
        <button className="button" onClick={resetGame}>Reset game</button>
      </div>
      </div>
    </div>
  );
}

export default VSplayer;
