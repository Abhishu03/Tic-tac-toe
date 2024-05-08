import React, { useState, useEffect } from 'react';
import './css/VScomputer.css';

function VScomputer() {
  const [boxes, setBoxes] = useState(Array(9).fill(''));
  const [turnO, setTurnO] = useState(true);
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState('');

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

  useEffect(() => {
    if (!turnO && count < 9 && !winner) {
      const timer = setTimeout(computerMove, 500);
      return () => clearTimeout(timer);
    }
  }, [turnO, count, winner]);

  const computerMove = () => {
    let index;
    do {
      index = Math.floor(Math.random() * 9);
    } while (boxes[index] !== '');

    const newBoxes = [...boxes];
    newBoxes[index] = 'X'; // Computer's move
    setBoxes(newBoxes);
    setTurnO(true);
    setCount(count + 1);
    checkWinner(newBoxes, index);
  };

  const TheWinner = () => {
    if(winner == 'O') {
      return ("You Won");
    }
    else{
      return("You Lost");
    }
  }

  const handleClick = (index) => {
    if (boxes[index] === '' && turnO && !winner) {
      const newBoxes = [...boxes];
      newBoxes[index] = 'O'; // Player's move
      setBoxes(newBoxes);
      setTurnO(false);
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
  };

  return (
    <div>
      {/*  */}
      <div className={`winner-holding ${winner ? '' : 'hide'}`}>
        <p className="winner-text">{TheWinner()}</p>
        {/* <p className="winner-text">Winner:  {winner}</p> */}
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
  );
}

export default VScomputer;
