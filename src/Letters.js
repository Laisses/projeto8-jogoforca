import { useState } from "react";

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export const Letters = ({enabled}) => {
    const [pressed, setPressed] = useState([]);

    const pressLetter = (letter) => {
        const pressedLetters = [...pressed, letter];
        
        if (enabled && !pressed.includes(letter)) {
            setPressed(pressedLetters);
        }
    };

    return (
        <ul className="letters">
            {alphabet.map(letter => {
                const letterEnabled = enabled && !pressed.includes(letter);

                return <li
                    className={`letter ${letterEnabled ? "ativo" : "inativo"}`}
                    onClick={() => pressLetter(letter)}
                    key={letter}>
                    {letter}
                </li>})
            }

        </ul>
    );
};

