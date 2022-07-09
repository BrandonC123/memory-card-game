const Scoreboard = (props) => {
    return (
        <div className="scoreboard-container container row">
            <div className="instruction-container">
                <p>Instructions:</p>
                <p>Below are 4 different card options</p>
                <p>
                    Choose as many unique cards as possible to increase your
                    points
                </p>
                <p>Points can be see on the right</p>
            </div>
            <div className="score-content-container">
                <p>Score: {props.currentScore}</p>
                <p>Best Score: {props.bestScore}</p>
            </div>
        </div>
    );
};

export default Scoreboard;
