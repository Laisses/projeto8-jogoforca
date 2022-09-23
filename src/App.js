import { useState } from "react";
import { Guess } from "./Guess";
import { Letters } from "./Letters";
import { Game } from "./Game";
import { words, images } from "./assets";

export const App = () => {
    const initialGameState = {
        word: null,
        pressedLetters: [],
        chances: 6,
        image: images[0],
        keyboardEnabled: false,
        guessInput: false,
    };
    
    const [state, setState] = useState(initialGameState);

    const randomizeWord = () => {
        const wordsList = words;
        return wordsList[Math.floor(Math.random() * wordsList.length)];
    }

    const chooseWord = () => {
        const randomWord = randomizeWord();
        const blankWord = randomWord
            .split("")
            .map(l => l !== "" ? " _" : " ")
            .join("");
        
        setState({
            ...state,
            pressedLetters: [],
            word: blankWord,
            keyboardEnabled: true,
            guessInput:true
        });
    }

    const pressLetter = (letter) => {
        if (state.keyboardEnabled && !state.pressedLetters.includes(letter)) {
            setState({
                ...state,
                pressedLetters: [...state.pressedLetters, letter]
            });
        }
    };
    
    return (
        <main className="main">
            <Game word={state.word} image={state.image} onClick={chooseWord}/>
            <Letters enabled={state.keyboardEnabled} onPress={pressLetter} pressedLetters={state.pressedLetters}/>
            <Guess enabled={state.guessInput}/>
        </main>
    );
};