import React from "react";
import { words } from "./words";

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
                <button className="game__choose-button">Escolher Palavras</button>
            </div>
            <ul className="letters">
                {alphabet.map(letter => <Letter key={letter} name={letter} />)}
            </ul>
            <div>
                <p>Já sei a resposta!</p>
                <input type="text" name="chute" className="chute" />
                <button>Chutar</button>
            </div>
        </main>
    );
};