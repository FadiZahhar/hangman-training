import './App.css';
import { useState } from 'react';
import LetterGrids from "./LetterGrids";
import ButtonGrid from "./ButtonGrid";

export default function GameBoard({secretWord}) {
    const [guessedtLetters,setGuessedtLetters] = useState([]);
    const letterGuestHandler = function(letter){
        let val = letter.toLowerCase();

        setGuessedtLetters(prev => [...prev,val]);
    }
    return (
        <div className='app-container'>
            <LetterGrids secretWord={secretWord} 
            guessedLetters={guessedtLetters}
            />
            <ButtonGrid letterGuest={letterGuestHandler} />
        </div>
    );
}