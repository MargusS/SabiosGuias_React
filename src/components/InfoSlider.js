export default function InfoSlider(props) {
    return (
        <>
            <div className="section-element">
                <div className="section-images">
                    <img src={props.image} alt=""></img>

                </div>
                <div className="section-info">
                    <p>{props.info}</p>
                </div>
            </div>

        </>
    )
}