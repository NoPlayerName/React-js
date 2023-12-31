/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'

//#region square
function Square({ value, onSquareClicks })
{

  return (
    <button className='square' onClick={onSquareClicks}>{value}</button>
  );
}
//#endregion

//#region board
function Board(xIsNext, squares, onPlay)
{

 
  function handleClick(i)
  {

    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    
    const nextSquares = squares.slice();
    
  
    nextSquares[i] = xIsNext ? 'X' : 'O';

    console.loge(nextSquares[i]);

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);

  let status = '';

  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Netx Player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
    <div className='board'>
      <Square value={squares[0]} onSquareClicks={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClicks={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClicks={() => handleClick(2)}/>
      <Square value={squares[3]} onSquareClicks={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClicks={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClicks={() => handleClick(5)}/>
      <Square value={squares[6]} onSquareClicks={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClicks={() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClicks={() => handleClick(8)}/>
      </div>
      </>
  )
}
//#endregion

//#region calculatewinner
function calculateWinner(squares)
{
  
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; 
    }
    
  }

  return false;

}
//#endregion


function Game()
{

  const [xIsNext, setXIsNext] = useState(true); 

  const [history, setHistory] = useState([Array(9).fill(null)]);

  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);

    setXIsNext(!xIsNext);
  }

  const moves = history.map((squares, move) => {
    let description = '';

    if (move > 0) {
      description = 'Go to move #' + moves;
    } else {
      description = 'Go to game start';
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  });

  return (

    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>
          {moves}
        </ol>
      </div>
    </div>

  );           
}

export default Game
