import './app.css';
import GameBoard from './game-board';

export default function App() {
    return (
        <div className="app-container">
            <h1>Welcome to Hangman!</h1>
            <p>do you want to play a game? </p>

            <div>
                <GameBoard
                    secretWord="TutsPlus"
                    maxErrors={6}
                />
            </div>
        </div>
    )
}
