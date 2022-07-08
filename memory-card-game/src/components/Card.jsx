const Card = (props) => {
    return (
        <div
            onClick={() => {
                props.addSelection(props.imgDetail.id);
            }}
            className="card"
        >
            <img
                className="card-img"
                src={props.imgDetail.imgUrl}
                alt={props.imgDetail.imgTitle}
            />
            <p className="accent-text">{props.imgDetail.imgTitle}</p>
        </div>
    );
};

export default Card;
