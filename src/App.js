import { Guess } from "./Guess";
import { Game } from "./Game";

export const App = () => {    
    return (
        <main className="main">
            <Game />
            <Guess />
        </main>
    );
};