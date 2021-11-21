import GameBoard from "./GameBoard";
import {useState} from 'react';
import WordSelect from './WordSelect';
export default function App() {
    const [secretWord,setSecretWord] = useState('');
    return (
    <div className="app-container">
        <h1>Welcome to hangman</h1>
        <p>Do you want to play the game</p>

        <div>
            <WordSelect
                isShown={!secretWord}
                wordSelected={val => setSecretWord(val)}
            />
            <GameBoard 
            secretWord={secretWord} 
            maxErrors="6"
            isShown={secretWord}
            />
        </div>
    </div>
        
    
);
}