import LetterGrid from './letterGrid';
import ButtonGrid from './buttonGrid';

export default function({secretWord}){
    return(
        <div>
            <LetterGrid secretWord={secretWord}
            guessedLetters={['a','r','t']} />
            <ButtonGrid />
        </div>
    )
}