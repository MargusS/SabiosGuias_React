import { useNavigate } from "react-router-dom";
import DesktopBg from "../components/DesktopBg";
import HeaderCustom from "../components/HeaderCustom";
import MobileBg from "../components/MobileBg";
import "../css/app.css";


export default function MainPage(){

    const navigate = useNavigate();

    return(
        <>
            <MobileBg/>
            <DesktopBg/>
            <HeaderCustom/>
        </>
    )
}