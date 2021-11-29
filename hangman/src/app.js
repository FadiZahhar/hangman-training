import GameBoard from './gameBoard';

export default function App(){
    return(
        <div>
            <h1>Welcome to Hangman!</h1>
            <p>Do you want to play a game?</p>

            <div>
                <GameBoard secretWord="React" />
            </div>
        </div>
    );
}