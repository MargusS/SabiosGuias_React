import 'aframe';
import { Entity, Scene } from 'aframe-react';
import './Video360.css';
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
  infoNextPortal = infoNextPortal[0]['visibilities'][0];


  useEffect(() => {
    // setVideoActive();
    if (parseInt(current) !== parseInt(stop)) {
      navigate(`/video-360/${route}/${current}`);

      window.location.reload();
    }
  }, [current]);

  const handleClick = (next, e) => {
    setCurrent(parseInt(next));
  }

  const goBack = () => {
    navigate('/vr-lobby');
  }


  return (
    <div className="my-container">
      {/* <button id="play-button">Play</button> */}

      <Scene cursor={{ rayOrigin: "mouse" }}>
        <a-assets>
          {/* <video id="vid" src={`/video/Route-${route}/Route-${route}-Stop-${current}.mp4`}></video> */}
          <video id="vid" loop={true} src={`/video/Route-${route}/Route-${route}-Stop-${current}.mp4`} autoPlay={true} > </video>
        </a-assets>

        <a-camera>
          <a-cursor color="white"></a-cursor>
        </a-camera>

        <a-entity visible="true" position="-3.75 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          <Entity primitive="a-circle" scale="0.95 0.95 0.95" color="black" events={{ mouseenter: (e) => handleClick(1) }} />
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Oficina" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>
        <a-entity visible={infoNextPortal['visible1']} position="-3.75 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          <Entity primitive="a-circle" scale="0.95 0.95 0.95" color="white" />
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Oficina" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>

        <a-entity position="-1.25 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          <Entity primitive="a-circle" color="black" events={{ mouseenter: (e) => handleClick(2) }} />
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Gofio" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>
        <a-entity visible={infoNextPortal['visible2']} position="-1.25 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          <Entity primitive="a-circle" color="white" />
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Gofio" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>

        <a-entity visible="true" position="1.25 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          <Entity primitive="a-circle" color="black" events={{ mouseenter: (e) => handleClick(3) }} />
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Premios" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>
        <a-entity visible={infoNextPortal['visible3']} position="1.25 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          <Entity primitive="a-circle" color="white" />
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Premios" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>

        <a-entity visible="true" position="3.75 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          {<Entity primitive="a-circle" color="black" events={{ mouseenter: (e) => handleClick(4) }} />}
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Entrada al barranco" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>
        <a-entity visible={infoNextPortal['visible4']} position="3.75 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          {<Entity primitive="a-circle" color="white" />}
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Entrada al barranco" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>

        <a-entity position="0 -2 5" rotation="215 0 180">
          <a-circle position="0 0 0.01" scale=".7 .7 .7" color="green"></a-circle>
          {<Entity primitive="a-circle" scale=".75 .75 .75" color="white" events={{ mouseenter: () => goBack() }} />}
          <a-plane position="0 0 0.05" color="green" width="1" height="0.3">
            <a-text value="Volver" width="4.5" color="white" align="center"></a-text>
          </a-plane>
        </a-entity>

        {/* <a-videosphere src="#vid"></a-videosphere> */}
        <a-sky id="vid" src="#vid"></a-sky>
      </Scene>
    </div >
  );
}

export default Video360;