import { useState } from "react";
import { words } from "./words";
import forca0 from "./assets/forca0.png";

const randomizeWord = () => {
    const wordsList = words;
    return wordsList[Math.floor(Math.random() * wordsList.length)];
}

export const Game = () => {

    const [word, setWord] = useState("");

    const chooseWord = () => {
        const randomWord = randomizeWord();
        setWord(randomWord);
    }

    return (
        <div className="game">
            <img src={forca0} alt="imagem da forca" className="game__image" />
            <button className="game__button" onClick={chooseWord}>Escolher Palavras</button>
            <div className="game__word">{word}</div>
        </div>
    );
};