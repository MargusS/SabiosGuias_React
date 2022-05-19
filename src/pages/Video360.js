import 'aframe';
import { Entity, Scene } from 'aframe-react';
import './Video360.css';
import { setVideoActive } from '../components/Video360Click.js';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "aframe-event-set-component";
import { infoRoutes } from "../components/infoRoutes";

function Video360() {
  const { route, stop } = useParams();
  const [current, setCurrent] = useState(parseInt(stop));
  const navigate = useNavigate();
  let infoNextPortal = infoRoutes.filter(array => array.id == parseInt(route));
  infoNextPortal = infoNextPortal[0].stops.filter(array => array.idStop == parseInt(stop));
  infoNextPortal = infoNextPortal[0]['nextPortal'][0];
  let infoPrevPortal = infoRoutes.filter(array => array.id == parseInt(route));
  infoPrevPortal = infoPrevPortal[0].stops.filter(array => array.idStop == parseInt(stop));
  infoPrevPortal = infoPrevPortal[0]['prevPortal'][0];


  useEffect(() => {
    setVideoActive();
    if (parseInt(current) !== parseInt(stop)) {
      navigate(`/video-360/${route}/${current}`);
      window.location.reload();
    }
  }, [current]);

  const handleClick = (next, e) => {
    setCurrent(parseInt(current) + next);
  }

  return (
    <div className="my-container">
      {/* <button id="play-button">Play</button> */}

      <Scene cursor={{ rayOrigin: "mouse" }}>
        <a-assets>
          <img id="img" src={`/video/Route-${route}/Route-${route}-Stop-${current}.jpg`}></img>
          {/* <video id="vid" loop={true} src={`/video/Route-${route}/Route-${route}-Stop-${current}.mp4`} autoPlay={true} > </video> */}
        </a-assets>

        <a-camera>
          <a-cursor color="white"></a-cursor>
        </a-camera>

        <a-entity visible={infoNextPortal['visible']} position={infoNextPortal['position']} rotation={infoNextPortal['rotation']}
          animation="property: rotation; dir: alternate; to: `{infoNextPortal['animation']}`; loop: true; dur: 2500">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="#ff6868"></a-circle>
          <Entity primitive="a-circle" color="green" events={{ mouseenter: (e) => handleClick(1) }} />
          <a-plane position="-0.1 -.1 0.05" color="#ff6868" width="1.4" height="0.3">
            <a-text value={infoNextPortal['titleStop']} width="3.5" align="center"></a-text>
          </a-plane>
        </a-entity>

        <a-entity visible={infoPrevPortal['visible']} position={infoPrevPortal['position']} rotation={infoPrevPortal['rotation']}
          animation="property: rotation; dir: alternate; to:`{infoPrevPortal['animation']}`; loop: true; dur: 2500">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="#ff6868"></a-circle>
          {/* <Entity visible={infoPrevPortal['visible']} primitive="a-circle" color="green" events={{ mouseenter: (e) => handleClick(-1) }} /> */}
          <a-plane position="-0.1 -.1 0.05" color="#ff6868" width="1.4" height="0.3">
            <a-text value={infoPrevPortal['titleStop']} width="3.5" align="center"></a-text>
          </a-plane>
        </a-entity>

        {/* <a-videosphere src="#vid"></a-videosphere> */}
        <a-sky id="my-sky" src="#img"></a-sky>
      </Scene>
    </div >
  );
}

export default Video360;