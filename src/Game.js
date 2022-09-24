export const Game = ({ word, blank, image, onClick, status, button }) => {
    return (
        <div className="game">
            <img src={image} alt="imagem da forca" className="game__image" />
            <button className="game__button" onClick={onClick}>{button}</button>
            <div className={`game__word ${status}`}>{blank === null ? word : blank}</div>
        </div>
    );
};