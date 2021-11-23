import GameBoard from './game-board';
import './app.css';
export default function App(){
    return(
        <div className="app-container">
            <h1>welcome to Hangman</h1>
            <p>Do you want to play a game?</p>


            <div>
                <GameBoard secretWord="butscrache"/>
            </div>
        </div>
        
    );
}