import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectedSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => { // update an inmutable to avoide state schedueling issues
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; // copy array and nexted arrays
            updatedGameBoard[rowIndex][colIndex] = 'X'; // update only the new arrays
            return updatedGameBoard;
        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((cell, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectedSquare(rowIndex, colIndex)}>{cell}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}