import forca0 from "./assets/forca0.png";

export const Game = () => {
    return (
        <div className="game">
            <img src={forca0} alt="imagem da forca" className="game__image" />
            <button className="game__button">Escolher Palavras</button>
        </div>
    );
};