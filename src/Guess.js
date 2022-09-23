export const Guess = ({enabled, input, onClick, value}) => {
    return (
        <div className="guess">
            <p>Já sei a palavra!</p>
            <input type="text" name="guess" className="guess__input" disabled={enabled ? false : true} onChange={input} value={value}/>
            <button className="guess__button" onClick={onClick}>Chutar</button>
        </div>
    );
};