import { itemsMenu } from "./itemsMenu";
import { useNavigate } from "react-router-dom";

export default function FooterCustom() {

    const navigate = useNavigate();

    const showItems = (item, index) => {
        return (
            <h3 key={index} onClick={() => navigate(item.dir)}>{item.name}</h3>
        )
    }

    return (
        <>
            <div id="ol" className="custom-footer">
                <div className="custom-footer-logos">
                    <a href="https://www.sabiosguiasinterpretes.com/">
                        <img width="200" height="300" src="/img/LogoSabiosGuias.png" alt="Sabios Guías Intérpretes" />
                    </a>
                    <a href="https://www3.gobiernodecanarias.org/medusa/edublog/ieselrincon/">
                        <img width="200" height="300" src="/img/LogoIESElRincon-transparent.png" alt="Sabios Guías Intérpretes" />
                    </a>
                    <a href="https://cifpsancristobal.org/">
                        <img width="200" height="300" src="/img/San-Cristobal-CIFP.logo_.png" alt="Sabios Guías Intérpretes" />
                    </a>
                </div>
                <hr />
                <div className="items-footer">
                    {
                        itemsMenu.map(showItems)
                    }
                </div>
                <hr />
                <div className="policies">
                    <p>Legal • Política de privacidad • Política de cookies</p>
                </div>
            </div>
        </>
    );
}
