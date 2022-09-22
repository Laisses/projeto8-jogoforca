import { useState } from "react";
import { Guess } from "./Guess";
import { Letters } from "./Letters";
import { Game } from "./Game";
import {words} from "./words";

export const App = () => {
    const initialGameState = {
        word: null,
        chances: 6,
        keyboardEnabled: false,
        guessInput: false,
    };
    
    const [gameState, setGameState] = useState(initialGameState);
    const [pressed, setPressed] = useState([]);

    const randomizeWord = () => {
        const wordsList = words;
        return wordsList[Math.floor(Math.random() * wordsList.length)];
    }

    const chooseWord = () => {
        const randomWord = randomizeWord();
        setGameState({ ...gameState, word: randomWord, keyboardEnabled: true, guessInput:true });
    }

    const pressLetter = (letter) => {
        const pressedLetters = [...pressed, letter];        
        if (gameState.keyboardEnabled && !pressed.includes(letter)) {
            setPressed(pressedLetters);
        }
    };
    
    return (
        <main className="main">
            <Game word={gameState.word} onClick={chooseWord}/>
            <Letters enabled={gameState.keyboardEnabled} onPress={pressLetter} pressedLetters={pressed}/>
            <Guess enabled={gameState.guessInput}/>
        </main>
    );
};