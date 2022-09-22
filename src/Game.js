import { useState } from "react";
import { Letters } from "./Letters";
import { words } from "./words";
import forca0 from "./assets/forca0.png";

const randomizeWord = () => {
    const wordsList = words;
    return wordsList[Math.floor(Math.random() * wordsList.length)];
}

const initialGameState = {
    word: null,
    chances: 6,
    KeyboardEnabled: false,
};

export const Game = () => {

    const [gameState, setGameState] = useState(initialGameState);

    const chooseWord = () => {
        const randomWord = randomizeWord();
        setGameState({ ...gameState, word: randomWord, KeyboardEnabled: true });
    }

    return (
        <>
            <div className="game">
                <img src={forca0} alt="imagem da forca" className="game__image" />
                <button className="game__button" onClick={chooseWord}>Escolher Palavras</button>
                <div className="game__word">{gameState.word}</div>
            </div>
            <Letters enabled={gameState.KeyboardEnabled}/>
        </>
    );
};