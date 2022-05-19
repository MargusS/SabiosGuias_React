import 'aframe';
import './Video360.css';
import { setVideoActive } from '../components/Video360Click.js';
import { useEffect } from 'react';
import MenuItem from '../components/MenuItem';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import ChangeSite from '../components/ChangeSite';

function Video360() {
  var route = 1;
  var stop = 3;
  const navigate = useNavigate();

  useEffect(() => {
    setVideoActive();
  }, []);

  return (
    <div className="my-container">
      {/* <button id="play-button">Play</button> */}

      <a-scene>
        <a-assets>
          <video id="vid" loop={true} src={`/video/Route-${route}/Route-${route}-Stop-${stop}.mp4`} autoPlay={true} > </video>
          <canvas id="my-canvas" width="350" height="350"></canvas>
          <img id="castillo-luz" src="src_Aframe/img/castillo_luz.jpg" />
          <img id="juan-icon" src="src_Aframe/img/icons/juan.JPG" />
          <img id="club-icon" src="src_Aframe/img/icons/club.jpg" />
          <img id="info" src="src_Aframe/img/icons/info.png" />
          <img id="close" src="src_Aframe/img/icons/close.png" />
        </a-assets>

        {<a-camera>
          <a-cursor raycaster="objects: .clickable" rayOrigin="mouse"></a-cursor>
        </a-camera>}

        {/* <a-cursor raycaster="objects: .clickable" rayOrigin="mouse"></a-cursor> */}

        <MenuItem x="0" y="1.6" pos="0" />
        <MenuItem x="0" y="1.6" pos="1" />
        <MenuItem x="0" y="1.6" pos="2" />

        <a-entity>
          <a-entity position="5 1.8 -2" rotation="0 -105 0"
            animation="property: rotation; dir: alternate; to: 0 -45 0; loop: true; dur: 2500">
            <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="#ff6868"></a-circle>
            <a-circle onClick={() => [route = 2, stop = 3, navigate("/")]} visible="true" src="#juan-icon" color="white" scale="1 1 1" width="3" height=".5"
              className="clickable" change-site="url: isleta_vr.html"  sound="on: mouseenter; src: #go">
            </a-circle>
            <a-plane position="0 0 0.01" color="#ff6868" width="1.4" height="0.3">
              <a-text value="Juan Rejon" width="3.5" align="center"></a-text>
            </a-plane>
          </a-entity>
          <a-entity position="-5 2 -1.5" rotation="0 50 0"
            animation="property: rotation; dir: alternate; to: 0 110 0; loop: true; dur: 2500">
            <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="#ff6868"></a-circle>
            <a-circle visible="true" src="#club-icon" color="white" scale="1 1 1" width="3" height=".5"
              class="clickable" change-site="url: victoria_vr.html" sound="on: mouseenter; src: #go">
            </a-circle>
            <a-plane position="0 0 0.01" color="#ff6868" width="1.4" height="0.3">
              <a-text value="Club Victoria" width="3.5" align="center"></a-text>
            </a-plane>
          </a-entity>
        </a-entity>

        <a-videosphere src="#vid"></a-videosphere>
      </a-scene>
    </div>
  );
}

export default Video360;