import { useState } from "react";
import { Guess } from "./Guess";
import { Letters } from "./Letters";
import { Game } from "./Game";
import {words} from "./words";

export const App = () => {
    const initialGameState = {
        word: null,
        chances: 6,
        KeyboardEnabled: false,
    };

    const [gameState, setGameState] = useState(initialGameState);

    const randomizeWord = () => {
        const wordsList = words;
        return wordsList[Math.floor(Math.random() * wordsList.length)];
    }

    const chooseWord = () => {
        const randomWord = randomizeWord();
        setGameState({ ...gameState, word: randomWord, KeyboardEnabled: true });
    }
    
    return (
        <main className="main">
            <Game word={gameState.word} onClick={chooseWord}/>
            <Letters enabled={gameState.KeyboardEnabled}/>
            <Guess />
        </main>
    );
};