import {useState} from 'react';
import LetterGrid from './letterGrid';
import ButtonGrid from './buttonGrid';

export default function({secretWord, maxErrors, isShown}){
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [errorCount, setErrorCount] = useState(0);    

    const letterGuessedHaandler = function(letter){
        let val = letter.toLowerCase();

        if (secretWord.toLowerCase().indexOf(val) === -1) {
            setErrorCount(errorCount + 1);
        }

        setGuessedLetters(prev => [...prev, val]);
    }

    return(
        <div className={isShown ? '' : 'hidden'}>
            <div>
                Mistakes left: {maxErrors - errorCount}
            </div>
            <LetterGrid secretWord={secretWord}
            guessedLetters={guessedLetters} />
            <ButtonGrid 
                letterGuessed={letterGuessedHaandler} 
                isShown={errorCount < maxErrors} />
        </div>
    )
}