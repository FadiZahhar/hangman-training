import Letter from './letter';
export default function ({ secretWord }) {
    let letters = secretWord
        .split('') //['R','e','a','c','t']
        .map((letter) => (
            <Letter
                value={letter}
                isShown={false}
            />
        ));
    return (
        <div>
            {letters}
        </div>
    )
}
