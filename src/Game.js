import styled from "styled-components";

export const Game = ({ word, blank, image, onClick, status, button }) => {
    return (
        <GameStyle >
            <GameImage data-identifier="game-image" src={image} alt="imagem da forca" />
            <GameButton data-identifier="choose-word" onClick={onClick}>{button}</GameButton>
            <GameWord data-identifier="word" wordColor={status}>{blank === null ? word : blank}</GameWord>
        </GameStyle>
    );
};

const GameStyle = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
    position: relative;
`;

const GameImage = styled.img`
    width: 300px;
`;

const GameButton = styled.button`
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
`;

const GameWord = styled.div`
    position: absolute;
    bottom: 10px;
    left: 480px;
    font-weight: bold;
    font-size: 40px;
    letter-spacing: 3px;
    color: ${props => props.wordColor};
`;