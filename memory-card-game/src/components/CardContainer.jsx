import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import Card from "./Card";

const CardContainer = () => {
    const [imgArray, setImgArray] = useState([
        { imgTitle: "CPU", imgUrl: "./img/cpu-pic.jpg", id: 0 },
        { imgTitle: "Graphics Card", imgUrl: "./img/gpu-pic.jpg", id: 1 },
        { imgTitle: "Hard Drive", imgUrl: "./img/hard-drive-pic.jpg", id: 2 },
        { imgTitle: "Keyboard", imgUrl: "./img/keyboard-pic.jpg", id: 3 },
        { imgTitle: "Monitor", imgUrl: "./img/monitor-pic.jpg", id: 4 },
        { imgTitle: "Motherboard", imgUrl: "./img/motherboard-pic.jpg", id: 5 },
        { imgTitle: "Mouse", imgUrl: "./img/mouse-pic.jpg", id: 6 },
        { imgTitle: "Ram", imgUrl: "./img/ram-pic.jpg", id: 7 },
        { imgTitle: "Solid State Drive", imgUrl: "./img/ssd-pic.jpg", id: 8 },
    ]);
    const [randomNum, setRandomNum] = useState([]);
    const [selectedPics, setSelectedPics] = useState([]);

    function generateRandomNums() {
        let num = Math.floor(Math.random() * imgArray.length);
        if (randomNum.includes(num)) {
            generateRandomNums();
            return;
        }
        if (randomNum.length < 5) {
            setRandomNum([...randomNum, num]);
        }
    }
    function addSelection(selection) {
        if (selectedPics.includes(selection)) {
            // New round
        }
        setSelectedPics([...selectedPics, selection]);
    }
    return (
        <div className="card-container container">
            {generateRandomNums()}
            <Card imgDetail={imgArray[randomNum[0]]} />
            <Card imgDetail={imgArray[randomNum[1]]} />
            <Card imgDetail={imgArray[randomNum[2]]} />
            <Card imgDetail={imgArray[randomNum[3]]} />
            <Card imgDetail={imgArray[randomNum[4]]} />
        </div>
    );
};

export default CardContainer;
