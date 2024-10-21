import React, { forwardRef, useEffect, useState } from 'react';

import eventData from '../data';

const Events = forwardRef( ({eventRef},ref) => {
  const [showEvents, setShowEvents] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowEvents(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const calculateWinner = (squares) => {
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
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (!gameStarted) return;
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
    setWinner(calculateWinner(boardCopy));
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  const startGame = () => {
    resetGame();
    setGameStarted(true);
  };

  const isDraw = board.every(cell => cell !== null) && !winner;

  return (
    <div className="bg-[#0e1925] text-white min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-[1200px]">
        <div className="flex-1 text-center mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-8" ref={eventRef}>EVENTS</h1>

          <div className="flex flex-col items-center">
            <div className="grid grid-cols-3 grid-rows-3 mb-5">
              {board.map((cell, index) => (
                <div
                  key={index}
                  className={`w-20 h-20 md:w-24 md:h-24 border-white text-2xl md:text-4xl font-bold flex items-center justify-center cursor-pointer ${
                    index < 6 ? 'border-b-4' : ''
                  } ${[0, 1, 3, 4, 6, 7].includes(index) ? 'border-r-4' : ''}`}
                  onClick={() => handleClick(index)}
                >
                  {cell}
                </div>
              ))}
            </div>

            <div className="w-[200px] md:w-[300px] h-8 bg-[#f9f4f4] rounded-full"></div>

            {!gameStarted ? (
              <button
                className="mt-4 px-4 py-2 text-lg md:text-xl bg-[#dde2e8] text-black rounded-lg hover:bg-[#062546] transition"
                onClick={startGame}
              >
                Start Game
              </button>
            ) : winner ? (
              <div className="mt-5 text-center">
                <h2 className="text-xl md:text-2xl">{winner} Wins!</h2>
                <button
                  className="mt-4 px-4 py-2 text-lg md:text-xl bg-[#dde2e8] text-black rounded-lg hover:bg-[#062546] transition"
                  onClick={resetGame}
                >
                  Play Again
                </button>
              </div>
            ) : isDraw ? (
              <div className="mt-5 text-center">
                <h2 className="text-xl md:text-2xl">It&apos;s a Draw!</h2>
                <button
                  className="mt-4 px-4 py-2 text-lg md:text-xl bg-[#dde2e8] text-black rounded-lg hover:bg-[#062546] transition"
                  onClick={resetGame}
                >
                  Play Again
                </button>
              </div>
            ) : (
              <h2 className="mt-4 text-lg md:text-xl">Next Player: {xIsNext ? 'X' : 'O'}</h2>
            )}
          </div>
        </div>

        <div className="flex-1 md:ml-12 space-y-8">
          {eventData.map((event, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5 ${showEvents ? 'opacity-100' : 'opacity-0'} transition-opacity`}
            >
              <div className="border-l-2 border-white h-full hidden md:block"></div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl md:text-2xl underline font-bold">{event.title}</h2>
                <p className="mt-1">
                  {event.date}
                </p>
              </div>
              <div className="w-[65%] h-auto md:w-[40%] bg-white rounded-lg transform hover:scale-110 transition">
                <img src={event.img} className='h-full w-full'/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
})

Events.displayName = 'Events';

export default Events;