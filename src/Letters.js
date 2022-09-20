const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const Letter = props => {
    return (
        <li>{props.name}</li>
    );
};

export const Letters = () => {
    return (
        <ul className="letters">
            {alphabet.map(letter => <Letter key={letter} name={letter} />)}
        </ul>
    );
};