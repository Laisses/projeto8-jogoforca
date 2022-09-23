import { useState } from "react";
import { Guess } from "./Guess";
import { Letters } from "./Letters";
import { Game } from "./Game";
import { words, images } from "./assets";

export const App = () => {
    const initialGameState = {
        word: null,
        blankWord: null,
        pressedLetters: [],
        errors: 0,
        image: images[0],
        keyboardEnabled: false,
        guessInput: false,
        status: "start",
    };

    const [state, setState] = useState(initialGameState);

    const randomizeWord = () => {
        const wordsList = words;
        return wordsList[Math.floor(Math.random() * wordsList.length)];
    }

    const chooseWord = () => {
        const randomWord = randomizeWord();
        const dottedWord = randomWord
            .split("")
            .map(_l => "_")
            .join("");

        setState({
            ...initialGameState,
            word: randomWord,
            blankWord: dottedWord,
            keyboardEnabled: true,
            guessInput: true,
        });

        console.log(randomWord);
    }

    const pressLetter = (letter) => {
        if (state.keyboardEnabled && !state.pressedLetters.includes(letter)) {
            if (state.word.includes(letter)) {
                const partialWord = state.blankWord
                    .split("")
                    .map((l, index) => state.word[index] === letter ? letter : l)
                    .join("");
    
                setState({
                    ...state,
                    blankWord: partialWord,
                    pressedLetters: [...state.pressedLetters, letter]
                })
            } else {
                const errorCount = state.errors + 1;
                
                if (errorCount < 6) {
                    setState({
                        ...state,
                        errors: errorCount,
                        image: images[errorCount],
                        pressedLetters: [...state.pressedLetters, letter]
                    })
                } else {
                    setState({
                        ...state,
                        blankWord: null,                        
                        pressedLetters: [...state.pressedLetters, letter],
                        errors: errorCount,
                        image: images[errorCount],
                        keyboardEnabled: false,
                        guessInput: false,
                        status: "red"
                    })
                }
            }
        }
    };

    return (
        <main className="main">
            <Game word={state.word} blank={state.blankWord} image={state.image} status={state.status} onClick={chooseWord} />
            <Letters enabled={state.keyboardEnabled} onPress={pressLetter} pressedLetters={state.pressedLetters} />
            <Guess enabled={state.guessInput} />
        </main>
    );
};