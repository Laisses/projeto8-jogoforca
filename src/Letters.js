const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export const Letters = ({enabled, onPress, pressedLetters}) => { 
    return (
        <ul className="letters">
            {alphabet.map(letter => {
                const letterEnabled = enabled && !pressedLetters.includes(letter);

                return <li
                    className={`letter ${letterEnabled ? "ativo" : "inativo"}`}
                    onClick={() => onPress(letter)}
                    key={letter}>
                    {letter}
                </li>})
            }

        </ul>
    );
};

