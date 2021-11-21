import GameBoard from "./GameBoard";

export default function App() {
    return (
    <div>
        <h1>Welcome to hangman</h1>
        <p>Do you want to play the game</p>

        <div>
            <GameBoard 
            secretWord="React" 
            maxErrors="6"
            />
        </div>
    </div>
        
    
);
}