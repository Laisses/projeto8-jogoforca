import { useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { GuessInput } from "./Guess";
import { Keyboard } from "./Letters";
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
        input: "",
        status: "start",
        button: "Escolher Palavra",
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
            input: "",
            button: "Mudar Palavra"
        });

        console.log(randomWord);
    };

    const simplifyLetter = l => {
        if (l === "ç") {
            return "c";
        } else if ("áãàâ".includes(l)) {
            return "a";
        } else if ("éê".includes(l)) {
            return "e";
        } else if ("í".includes(l)) {
            return "i";
        } else if ("óô".includes(l)) {
            return "o";
        } else if ("ú".includes(l)) {
            return "u";
        } else {
            return l;
        }
    };

    const simplifyWord = word => word.split("").map(simplifyLetter).join("");    
       
    const compareLetters = (lhs, rhs) => {
        return simplifyLetter(lhs) === simplifyLetter(rhs);
    };

    const pressLetter = (letter) => {
        if (state.keyboardEnabled && !state.pressedLetters.includes(letter)) {
            if (simplifyWord(state.word).includes(letter)) {
                
                const partialWord = state.blankWord
                    .split("")
                    .map((l, index) => compareLetters(state.word[index], letter) ? state.word[index] : l)
                    .join("");

                if (partialWord !== state.word) {
                    setState({
                        ...state,
                        blankWord: partialWord,
                        pressedLetters: [...state.pressedLetters, letter]
                    })
                } else {
                    setState({
                        ...state,
                        blankWord: null,
                        keyboardEnabled: false,
                        guessInput: false,
                        status: "green",
                        button: "Escolher Palavra",
                    })
                }

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
                        status: "red",
                        button: "Escolher Palavra",
                    })
                }
            }
        }
    };

    const guessWord = () => {
        if (state.input === state.word) {
            setState({
                ...state,
                blankWord: null,
                keyboardEnabled: false,
                guessInput: false,
                status: "green",
                button: "Escolher Palavra",
            })
        } else {
            setState({
                ...state,
                blankWord: null,
                image: images[6],
                keyboardEnabled: false,
                guessInput: false,
                status: "red",
                button: "Escolher Palavra",
            })
        }
    }

    return (
        <>
            <GlobalStyle />
            <Main>
                <Game word={state.word} blank={state.blankWord} image={state.image} status={state.status} button={state.button} onClick={chooseWord} />
                <Keyboard enabled={state.keyboardEnabled} onPress={pressLetter} pressedLetters={state.pressedLetters} />
                <GuessInput enabled={state.guessInput} input={(e) => setState({ ...state, input: e.target.value })} onClick={guessWord} value={state.input} />
            </Main>
        </>
        
    );
};

const Main = styled.main`
    font-family: 'Roboto', sans-serif;
    max-width: 800px;
    margin: auto;
`;