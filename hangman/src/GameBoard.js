import './App.css';
import LetterGrids from "./LetterGrids";
import ButtonGrid from "./ButtonGrid";

export default function GameBoard({secretWord}) {
    return (
        <div className='app-container'>
            <LetterGrids secretWord={secretWord} 
            guessedLetters={['R','a','t']}
            />
            <ButtonGrid />
        </div>
    );
}