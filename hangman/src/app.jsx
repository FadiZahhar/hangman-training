import { useState } from 'react';
import GameBoard from './game-board';
import './app.css';
import WordSelect from './word-select';
export default function App(){
    const [secretWord,setSecretWord]= useState('');






    return(
        <div className="notadiv">        
            <div className="app-container">
                <div>            
                    <h1>welcome to Hangman</h1>
                    <p>Do you want to play a game?</p>


                    <div>
                        <WordSelect
                            isShown={!secretWord}
                            wordSelected={val => setSecretWord(val)}
                        />
                        <GameBoard 
                            secretWord={secretWord}
                            maxErrors={6}
                            isShown={secretWord}
                        />
                    </div>
                </div>

            </div>
        </div>

        
    );
}