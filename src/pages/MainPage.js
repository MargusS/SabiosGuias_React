import { useNavigate } from "react-router-dom";
import { infoSabios } from "../components/infoSabios";
import DesktopBg from "../components/DesktopBg";
import FooterCustom from "../components/FooterCustom";
import HeaderCustom from "../components/HeaderCustom";
import InfoSlider from "../components/InfoSlider";
import MobileBg from "../components/MobileBg";
import "../css/app.css";


export default function MainPage() {

    const navigate = useNavigate();

    return (
        <>
            <HeaderCustom />
            <div id="ul" className="section">
                <div className="section-elements">
                    {
                        infoSabios.map((item) => <InfoSlider image={item.img} info={item.text} />)
                    }
                </div>
            </div>
            <FooterCustom />
            <MobileBg />
            <DesktopBg />
        </>
    )
}