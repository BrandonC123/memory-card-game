import { useEffect } from "react";
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
    const [randomNumArray, setRandomNumArray] = useState([]);

    function generateRandomNums() {
        return Math.floor(Math.random() * imgArray.length);
    }

    return (
        <div className="card-container">
            <Card imgDetail={imgArray[generateRandomNums()]} />
            <Card imgDetail={imgArray[generateRandomNums()]} />
            <Card imgDetail={imgArray[generateRandomNums()]} />
            <Card imgDetail={imgArray[generateRandomNums()]} />
            <Card imgDetail={imgArray[generateRandomNums()]} />
        </div>
    );
};

export default CardContainer;
