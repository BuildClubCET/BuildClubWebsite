import React, { useEffect, useState } from 'react';

function Events() {
  const [showEvents, setShowEvents] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

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

  return (
    <div className="bg-[#0e1925] text-white min-h-screen flex justify-center items-center">
      <div className="flex flex-row w-[90%] max-w-[1200px]">
        <div className="flex-1 text-center">
          <h1 className="text-6xl font-bold font-serif mb-8">EVENTS</h1>

          <div className="flex flex-col items-center">
            <div className="grid grid-cols-3 grid-rows-3 gap-2 mb-5">
              {board.map((cell, index) => (
                <div
                  key={index}
                  className={`w-24 h-24 border-2 border-white text-4xl font-bold flex items-center justify-center cursor-pointer ${
                    index < 6 ? 'border-b-4' : ''
                  } ${[0, 1, 2, 4, 5, 7].includes(index) ? 'border-r-4' : ''}`}
                  onClick={() => handleClick(index)}
                >
                  {cell}
                </div>
              ))}
            </div>

            <div className="w-[300px] h-8 bg-[#f9f4f4] rounded-full"></div>

            {winner ? (
              <div className="mt-5 text-center">
                <h2 className="text-2xl">{winner} Wins!</h2>
                <button
                  className="mt-4 px-4 py-2 text-xl bg-[#dde2e8] text-black rounded-lg hover:bg-[#062546] transition"
                  onClick={resetGame}
                >
                  Play Again
                </button>
              </div>
            ) : (
              <h2 className="mt-4 text-xl">Next Player: {xIsNext ? 'X' : 'O'}</h2>
            )}
          </div>
        </div>

        <div className="flex-1 ml-12 space-y-8">
          {['Event 1 - Aug 5', 'Event 2 - Aug 10', 'Event 3 - Aug 15'].map((event, index) => (
            <div
              key={index}
              className={`flex items-center space-x-5 ${showEvents ? 'opacity-100' : 'opacity-0'} transition-opacity`}
            >
              <div className="border-l-2 border-white h-full"></div>
              <div className="flex-1">
                <h2 className="text-2xl underline font-bold">{event}</h2>
                <p className="mt-1">
                  The CET Build Club is a dynamic group that focuses on construction and engineering projects.
                </p>
                <p>Details</p>
              </div>
              <div className="w-[200px] h-[130px] bg-white rounded-lg transform hover:scale-110 transition"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
