import GameBoard from './game-board';

export default function App(){
    return(
        <div>
            <h1>welcome to Hangman</h1>
            <p>Do you want to play a game?</p>


            <div>
                <GameBoard secretWord="butscrachers"/>
            </div>
        </div>
        
    );
}