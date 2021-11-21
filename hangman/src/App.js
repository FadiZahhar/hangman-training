import GameBoard from "./GameBoard";

export default function App() {
    return (
    <div>
        <h1>Welcome to hangman</h1>
        <p>Do you want to play the game</p>

        <div>
            <GameBoard secretWord="React" />
        </div>
    </div>
        
    
);
}