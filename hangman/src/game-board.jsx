import LetterGrid from './letter-grid' ;
import ButtonGrid from './button-grid';
export default function({secretWord}){
    return(
        <div>
            <LetterGrid 
                secretWord={secretWord}
                guessedLetters={['s','b']}
            />
            <ButtonGrid></ButtonGrid>
        </div>
    )
}