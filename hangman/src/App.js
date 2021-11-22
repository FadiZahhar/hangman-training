import React from 'react'
import ReactDOM from 'react-dom'
import GameBoard from './game-board';

export default function App() {
    return (
        <div>
            <h1>Welcome to Hangman!</h1>
            <p>do you want to play a game? </p>

            <div>
                <GameBoard secretWord="TutsPlus" />
            </div>
        </div>
    )
}
