import {useState} from 'react';
import LetterGrid from './letterGrid';
import ButtonGrid from './buttonGrid';

export default function({secretWord}){
    const [guessedLetters, setGuessedLetters] = useState([]);
    const letterGuessedHaandler = function(letter){
        let val = letter.toLowerCase();

        setGuessedLetters(prev => [...prev, val]);
    }

    return(
        <div>
            <LetterGrid secretWord={secretWord}
            guessedLetters={guessedLetters} />
            <ButtonGrid letterGuessed={letterGuessedHaandler} />
        </div>
    )
}