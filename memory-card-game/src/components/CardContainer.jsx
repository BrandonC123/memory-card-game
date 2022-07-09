import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import Card from "./Card";

const CardContainer = (props) => {
    const [imgArray, setImgArray] = useState([
        { imgTitle: "Computer", imgUrl: "./img/computer-pic.jpg", id: 0 },
        { imgTitle: "CPU Cooler", imgUrl: "./img/cpu-cooler-pic.jpg", id: 1 },
        { imgTitle: "CPU", imgUrl: "./img/cpu-pic.jpg", id: 2 },
        { imgTitle: "Graphics Card", imgUrl: "./img/gpu-pic.jpg", id: 3 },
        { imgTitle: "Hard Drive", imgUrl: "./img/hard-drive-pic.jpg", id: 4 },
        { imgTitle: "Headphone", imgUrl: "./img/headphone-pic.jpg", id: 5 },
        { imgTitle: "Keyboard", imgUrl: "./img/keyboard-pic.jpg", id: 6 },
        { imgTitle: "Monitor", imgUrl: "./img/monitor-pic.jpg", id: 7 },
        { imgTitle: "Motherboard", imgUrl: "./img/motherboard-pic.jpg", id: 8 },
        { imgTitle: "Mouse", imgUrl: "./img/mouse-pic.jpg", id: 9 },
        { imgTitle: "Speaker", imgUrl: "./img/speaker-pic.jpg", id: 10 },
        { imgTitle: "Solid State Drive", imgUrl: "./img/ssd-pic.jpg", id: 11 },
    ]);
    const [randomNum, setRandomNum] = useState([]);
    const [selectedPics, setSelectedPics] = useState([]);

    function generateRandomNums() {
        let num = Math.floor(Math.random() * imgArray.length);
        if (randomNum.includes(num)) {
            generateRandomNums();
            return;
        }
        if (randomNum.length < 4) {
            setRandomNum([...randomNum, num]);
        }
    }
    function addSelection(selection) {
        if (selectedPics.includes(selection)) {
            // New round
            // Reset scoreboard
            console.log(selectedPics);
            console.log(selection);
            props.addCurrentScore(false);
            setSelectedPics([]);
        } else {
            setSelectedPics([...selectedPics, selection]);
            props.addCurrentScore(true);
        }
        setRandomNum([]);
        generateRandomNums();
    }
    return (
        <div className="card-container">
            {generateRandomNums()}
            <Card
                imgDetail={imgArray[randomNum[0]]}
                addSelection={addSelection}
            />
            <Card
                imgDetail={imgArray[randomNum[1]]}
                addSelection={addSelection}
            />
            <Card
                imgDetail={imgArray[randomNum[2]]}
                addSelection={addSelection}
            />
            <Card
                imgDetail={imgArray[randomNum[3]]}
                addSelection={addSelection}
            />
        </div>
    );
};

export default CardContainer;
