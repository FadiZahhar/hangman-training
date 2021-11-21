import './App.css';
import { useState } from 'react';
import LetterGrids from "./LetterGrids";
import ButtonGrid from "./ButtonGrid";

export default function GameBoard({secretWord, maxErrors, isShown}) {
    const [guessedtLetters,setGuessedtLetters] = useState([]);
    const [errorCount,setErrorCount] = useState(0);

    const letterGuestHandler = function(letter){
        let val = letter.toLowerCase();
        if(secretWord.toLowerCase().indexOf(val) === -1) {
            setErrorCount(errorCount + 1);
        }


        setGuessedtLetters(prev => [...prev,val]);
    }
    return (
        <div className={isShown ? '' : 'hide'}>
            Mistakes lefts: {maxErrors - errorCount}
            <LetterGrids secretWord={secretWord} 
            guessedLetters={guessedtLetters}
            />
            <ButtonGrid 
            letterGuest={letterGuestHandler}
            isShown={errorCount < maxErrors} />
        </div>
    );
}