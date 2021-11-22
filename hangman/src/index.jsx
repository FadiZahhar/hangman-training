import React from 'react';
import ReactDom from 'react-dom';

function App(){
    return (
    <div>
        <h1>Welcome to Hangman!</h1>
        <p>Do you want to play </p>
    </div>
    );
}

ReactDom.render(
    <App name="Yara"/>,
    document.getElementById('root')
);