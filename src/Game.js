export const Game = ({ word, blank, image, onClick }) => {
    return (
        <div className="game">
            <img src={image} alt="imagem da forca" className="game__image" />
            <button className="game__button" onClick={onClick}>Escolher Palavras</button>
            <div className="game__word">{blank}</div>
        </div>
    );    
};