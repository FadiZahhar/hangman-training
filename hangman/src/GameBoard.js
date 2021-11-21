import LetterGrids from "./LetterGrids";
export default function GameBoard({secretWord}) {
    return (
        <div>
            <LetterGrids secretWord={secretWord} 
            guessedLetters={['R','a','t']}
            />
        </div>
    );
}