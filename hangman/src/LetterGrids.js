import React from 'react';
import Letter from './Letter';
export default function LetterGrids({secretWord, guessedLetters}) {
    let Letters = secretWord
                 .split('')
                 .map((letter,index) => {
                     let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
                    return (
                     <Letter  
                     value={letter}
                     isShown={isShown}
                     key={index}
                     />
                 )})
    return (
        <div>
            {Letters}
        </div>
    );
}