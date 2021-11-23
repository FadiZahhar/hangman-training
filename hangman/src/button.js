import { useState } from 'react';

export default function ({ value }) {
    const [isClicked, setIsClicked] = useState(false)
    let className = 'button';

    if (isClicked) {
        className += ' guessed';
    }
    function clickHandler() {
        setIsClicked(true);
    }

    console.log('button');
    return (
        <button className={className}
            onClick={clickHandler}

        >
            {value}
        </button>
    )
}