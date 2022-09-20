import { Guess } from "./Guess";
import { Letters } from "./Letters";
import { Game } from "./Game";

export const App = () => {    
    return (
        <main className="main">
            <Game />
            <Letters />
            <Guess />
        </main>
    );
};