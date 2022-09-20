import React from "react";

export const App = () => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const Letter = props => {
        return (
            <li>{props.name}</li>
        );
    };

    return (
        <main className="main">
            <div className="game">
                <img src="assets/forca0.png" alt="imagem da forca" className="game__image" />
                <button className="game__button">Escolher Palavras</button>
            </div>
            <ul className="letters">
                {alphabet.map(letter => <Letter key={letter} name={letter} />)}
            </ul>
            <div className="guess">
                <p>Já sei a palavra!</p>
                <input type="text" name="guess" className="guess__input" />
                <button className="guess__button">Chutar</button>
            </div>
        </main>
    );
};