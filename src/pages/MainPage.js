import DesktopBg from "../components/DesktopBg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileBg from "../components/MobileBg";
import "../css/app.css";


export default function MainPage(){
    return(
        <>
            <MobileBg/>
            <DesktopBg/>
        </>
    )
}