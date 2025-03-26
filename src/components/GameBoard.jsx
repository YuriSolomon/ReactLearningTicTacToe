// import { useState } from "react";

export default function GameBoard({ onSelectSquare, board }) {

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectedSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => { // update an inmutable to avoide state schedueling issues
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; // copy array and nexted arrays
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol; // update only the new arrays
    //         return updatedGameBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((cell, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={cell !== null}>{cell}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}