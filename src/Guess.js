export const Guess = () => {
    return (
        <div className="guess">
            <p>Já sei a palavra!</p>
            <input type="text" name="guess" className="guess__input" disabled/>
            <button className="guess__button" >Chutar</button>
        </div>
    );
};