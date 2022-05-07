import { useEffect, useState } from "react";
import { itemsMenu } from "./itemsMenu";
import { useNavigate } from "react-router-dom";

export default function OverlayMenu() {

    const navigate = useNavigate();
    const [overlay, setOverlay] = useState(true);

    useEffect(() => {
        if (!overlay) {
            document.getElementById("el").style.visibility = "visible";
            document.getElementById("al").style.visibility = "hidden";
            setOverlay(!overlay);
        }
    });

    const handleVisible = () => {
        setOverlay(!overlay);
    }

    const showItems = (item, index) => {
        return (
            <h3 key={index} onClick={() => navigate(item.dir)}>{item.name}</h3>
        )
    }

    return (
        <>
            <div id="al" className="overlay-menu">
                <img className="logo" width="200" height="300" src="/img/LogoSabiosGuias.png" alt="Sabios Guías Intérpretes" />
                <div className="items-overlay">
                    {
                        itemsMenu.map(showItems)
                    }
                </div>
                <div onClick={handleVisible} className="bt-close">
                    <h3>X</h3>
                </div>
            </div>
        </>
    )
}