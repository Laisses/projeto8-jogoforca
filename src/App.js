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
        const dottedWord = randomWord
            .split("")
            .map(_l => "_")
            .join("");

        setState({
            ...state,
            pressedLetters: [],
            word: randomWord,
            blankWord: dottedWord,
            keyboardEnabled: true,
            guessInput: true
        });
    }

    const pressLetter = (letter) => {
        console.log(state.word)

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
                setState({
                    ...state,
                    pressedLetters: [...state.pressedLetters, letter]
                })
            }
        }
    };

    return (
        <main className="main">
            <Game word={state.word} blank={state.blankWord} image={state.image} onClick={chooseWord} />
            <Letters enabled={state.keyboardEnabled} onPress={pressLetter} pressedLetters={state.pressedLetters} />
            <Guess enabled={state.guessInput} />
        </main>
    );
};