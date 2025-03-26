export default function GameOver({winner, onRestart}) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} won</p>}
            {!winner && <p>It's a draw!</p> /* if ' is giving an error use code &apos; */ }
            <p>
              <button onClick={onRestart}>Rematch!</button>  
            </p>
        </div>
    )
}