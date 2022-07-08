const Scoreboard = () => {
    return (
        <div className="scoreboard-container container row">
            <div className="instruction-container">
                <p>Instructions:</p>
                <p>Below are 4 different card options</p>
                <p>Choose as many unique as possible to increase your points</p>
                <p>Points can be see on the right</p>
            </div>
            <div className="score-content-container">
                <p>Score: 1</p>
                <p>Best Score: 1</p>
            </div>
        </div>
    );
};

export default Scoreboard;
