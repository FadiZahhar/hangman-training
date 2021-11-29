import LetterGrid from './letterGrid';


export default function({secretWord}){
    return(
        <div>
            <LetterGrid secretWord={secretWord}
            guessedLetters={['a','r','t']} />
        </div>
    )
}