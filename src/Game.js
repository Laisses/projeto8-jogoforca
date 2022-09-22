import forca0 from "./assets/forca0.png";

export const Game = ({ word, onClick }) => {
    return (
        <div className="game">
            <img src={forca0} alt="imagem da forca" className="game__image" />
            <button className="game__button" onClick={onClick}>Escolher Palavras</button>
            <div className="game__word">{word}</div>
        </div>
    );
};