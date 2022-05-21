import 'aframe';
import { Entity, Scene } from 'aframe-react';
import './Video360.css';
import { setVideoActive } from '../components/Video360Click.js';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "aframe-event-set-component";
import { infoRoutes } from "../components/infoRoutes";

function VrLobby() {
    const { route, stop } = useParams();
    const [current, setCurrent] = useState(parseInt(stop));
    const navigate = useNavigate();
    //   let infoNextPortal = infoRoutes.filter(array => array.id == parseInt(route));
    //   infoNextPortal = infoNextPortal[0].stops.filter(array => array.idStop == parseInt(stop));
    //   infoNextPortal = infoNextPortal[0]['nextPortal'][0];
    //   let infoPrevPortal = infoRoutes.filter(array => array.id == parseInt(route));
    //   infoPrevPortal = infoPrevPortal[0].stops.filter(array => array.idStop == parseInt(stop));
    //   infoPrevPortal = infoPrevPortal[0]['prevPortal'][0];


    // useEffect(() => {
    //     if (parseInt(current) !== parseInt(stop)) {
    //         // navigate(`/video-360/${route}/${current}`);
    //         window.location.reload();
    //     }
    // }, [current]);

    const showVideo360 = (route, stop) => {
        navigate(`/video-360/${route}/${stop}`);
    }

    return (
        <Scene cursor={{ rayOrigin: "mouse" }}>
            <a-camera>
                <a-cursor color="white"></a-cursor>
            </a-camera>
            <Entity primitive="a-box" src="img/textura_pared.jpg" repeat="2 2 1" depth="1" position="10 0 0" height="15" width="30"
                rotation="0 90 180">
            </Entity>
            <Entity primitive="a-box" src="img/LogoIESElRincon-transparent.png" depth="1" position="9.8 4 -3.5" height="4" width="7"
                rotation="0 90 0">
            </Entity>
            {/* <!-- frente --> */}
            <Entity primitive="a-box" src="img/textura_pared.jpg" repeat="2 2 1" depth="1" position="0 0 -15" height="15" width="20"
                rotation="0 0 180">
            </Entity>
            <Entity primitive="a-box" src="img/LogoSabiosGuias.png" depth="1" position="0 4 -14.8" height="4" width="7"
                rotation="0 0 0">
            </Entity>
            {/* <!-- izq --> */}
            <Entity primitive="a-box" src="img/textura_pared.jpg" repeat="2 2 1" depth="1" position="-10 0 0" height="15" width="30"
                rotation="0 90 180">
            </Entity>
            <Entity primitive="a-box" src="img/San-Cristobal-CIFP.logo_.png" depth="1" position="-9.8 4 -3.5" height="4" width="7"
                rotation="0 90 0">
            </Entity>
            {/* <!-- atras --> */}
            <Entity primitive="a-box" src="img/textura_pared.jpg" repeat="2 2 1" depth="1" position="0 0 15" height="15" width="20"
                rotation="0 0 180">
            </Entity>
            {/* <!-- techo --> */}
            <Entity primitive="a-box" src="img/textura_pared.jpg" repeat="2 2 1" depth="1" position="0 8 0" height="20" width="30"
                rotation="90 90 0">
            </Entity>

            <a-entity position="-2.5 1.8 -6" rotation="0 0 0"
                animation="property: position; dir: alternate; to: -2.5 2 -6; loop: true; dur: 650">
                <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="rgb(195, 214, 47)"></a-circle>
                <Entity primitive="a-circle" color="white" events={{ mouseenter: (e) => showVideo360(2, 1) }} />
                <a-plane position="0 -.1 0.01" color="rgb(16, 126, 115)" width="1.4" height="0.3">
                    <a-text value="Barranco de Azuaje" width="3.5" align="center"></a-text>
                </a-plane>
            </a-entity>
            <a-dodecahedron position="-2.5 0 -6.3" rotation="65 165 0" src="img/textura_piedra2.jpg" repeat="3 3 0"
                radius=".8"></a-dodecahedron>

            <a-entity position="2.5 1.8 -6" rotation="0 -20 0"
                animation="property: position; dir: alternate; to: 2.5 2 -6; loop: true; dur: 650">
                <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="rgb(195, 214, 47)"></a-circle>
                <Entity primitive="a-circle" color="white" events={{ mouseenter: (e) => showVideo360(1, 1) }} />
                <a-plane position="0 -.1 0.01" color="rgb(16, 126, 115)" width="1.4" height="0.3">
                    <a-text value="Castillo de la Luz " width="3.5" align="center"></a-text>
                </a-plane>
            </a-entity>
            <a-dodecahedron position="2.5 0 -6.3" rotation="65 165 0" src="img/textura_piedra2.jpg" repeat="3 3 0"
                radius=".8"></a-dodecahedron>

            {/* <!-- suelo --> */}
            <a-cylinder id="ground" src="img/textura_suelo.jpg" repeat="10 10 0" radius="20" radius-top="1" width="20000"
                height="0.01">
            </a-cylinder>
        </Scene>
    );
}

export default VrLobby;