import {useState} from 'react';
import LetterGrid from './letter-grid' ;
import ButtonGrid from './button-grid';

export default function({secretWord,maxErrors, isShown}){
    const [guessedLetters,setGuessedLetters] = useState([]);
    const [errorCount, setErrorCount]= useState(0);
    
    const letterGuessedHandler = function(letter) {
       let val = letter.toLowerCase();
       setGuessedLetters(prev => [...prev, val]);
       if(secretWord.toLowerCase().indexOf(val)===-1){
           setErrorCount(errorCount + 1);
       }
    }
    return(
        <div>
        <div className={isShown ? '' : 'hidden'}>
            <div>
                Mistakes left: {maxErrors - errorCount}
            </div><br/>
            <LetterGrid 
                secretWord={secretWord}
                guessedLetters={guessedLetters}
            />
            <ButtonGrid letterGuessed={letterGuessedHandler}
            isShown={errorCount<maxErrors}></ButtonGrid>
            
        </div>
            
                
            
        </div>
    )
}