import styled from "styled-components";

export const GuessInput = ({enabled, input, onClick, value}) => {
    return (
        <Guess>
            <p>Já sei a palavra!</p>
            <input 
                type="text" 
                name="guess"
                disabled={enabled ? false : true} 
                onChange={input} 
                value={value} 
                onKeyPress={e => e.key === "Enter" && onClick()}
            />
            <button onClick={onClick}>Chutar</button>
        </Guess>
    );
};

const Guess = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        margin: auto 10px;
        width: 300px;
        height: 30px;
        border: 1px solid #b1b3b1;
        border-radius: 3px;
        &:focus {
            outline: none;
            }
    }

    button {
        width: 80px;
        height: 40px;
        font-size: 18px;
        font-weight: bold;
        color: #3F7EA6;
        background-color: #E1ECF4;
        border: 1px solid #78A4BF;
        border-radius: 3px;
        cursor: pointer;
        &:hover, &:active {
            background-color: #cad4db;
        }
    }
`;