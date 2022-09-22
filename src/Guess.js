export const Guess = ({enabled}) => {
    return (
        <div className="guess">
            <p>Já sei a palavra!</p>
            <input type="text" name="guess" className="guess__input" disabled={enabled ? false : true}/>
            <button className="guess__button">Chutar</button>
        </div>
    );
};