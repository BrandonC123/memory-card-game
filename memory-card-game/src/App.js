import { useState } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";

function App() {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const addCurrentScore = (add) => {
        if (add) {
            setCurrentScore(currentScore + 1);
        } else {
            if (currentScore > bestScore) {
                setBestScore(currentScore);
            }
            setCurrentScore(0);
        }
    };
    return (
        <div className="overall-container">
            <Header />
            <Scoreboard currentScore={currentScore} bestScore={bestScore} />
            <CardContainer
                addCurrentScore={addCurrentScore}
                setBestScore={setBestScore}
            />
        </div>
    );
}

export default App;
