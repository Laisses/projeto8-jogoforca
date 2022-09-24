import styled from "styled-components";

export const Game = ({ word, blank, image, onClick, status, button }) => {
    return (
        <GameStyle wordColor={status}>
            <img src={image} alt="imagem da forca" />
            <button onClick={onClick}>{button}</button>
            <div>{blank === null ? word : blank}</div>
        </GameStyle>
    );
};

const GameStyle = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
    position: relative;

    img {
        width: 300px;
    }

    button {
        margin-top: 20px;
        margin-left: 200px;
        border: none;
        padding: 15px;
        background-color: #26A653;
        color: #ffffff;
        font-size: 18px;
        font-weight: bold;
        border-radius: 5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        &:hover {
            background-color: #219449;
        }
        &:active {
            transform: translateY(2px);
            background-color: #219449;
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        }
    }

    div {
        position: absolute;
        bottom: 10px;
        left: 480px;
        font-weight: bold;
        font-size: 40px;
        letter-spacing: 3px;
        color: ${props => props.wordColor};
    }
`;