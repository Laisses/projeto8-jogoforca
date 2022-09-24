import styled from "styled-components";
import { alphabet } from "./assets";

export const Keyboard = ({enabled, onPress, pressedLetters}) => { 
    return (
        <Letters>
            {alphabet.map(letter => {
                const letterEnabled = enabled && !pressedLetters.includes(letter);
                return <Letter
                    active={letterEnabled}
                    onClick={() => onPress(letter)}
                    key={letter}>
                    {letter}
                </Letter>})
            }
        </Letters>
    );
};

const Letters = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 30px auto;
    width: 715px;
`;

const Letter = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;

    width: 45px;
    height: 45px;
    margin: 5px;
    border-radius: 3px;

    color: ${props => props.active ? "#3F7EA6" : "#313131"};
    background-color: ${props => props.active ? "#E1ECF4" : "#dedede"};
    border: ${props => props.active ? "1px solid #78A4BF" : "none"};
    box-shadow: ${props => props.active ? "0px 2px 2px rgba(0, 0, 0, 0.25)" : "none"};
    cursor: ${props => props.active ? "pointer" : "auto"};
    &:active {
        transform: ${props => props.active ? "translateY(2px)" : "none"};
    }
`;