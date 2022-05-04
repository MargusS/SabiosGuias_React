import 'aframe';
import './Video360.css';
import { setVideoActive } from '../components/Video360Click.js';
import { useEffect } from 'react';
import MenuItem from '../components/MenuItem';
import { useParams } from 'react-router-dom';

function Video360() {
  const { route, stop } = useParams();

  useEffect(() => {
    setVideoActive();
  }, []);

  return (
    <div className="my-container">
      {/* <button id="play-button">Play</button> */}

      <a-scene>
        <a-assets>
          <video id="vid" loop={true} src={`/video/Route-${route}/Route-${route}-Stop-${stop}.mp4`} autoPlay={true} > </video>
        </a-assets>

        {/* <a-camera>
            <a-cursor raycaster="objects: .clickable" rayorigin="mouse"></a-cursor>
        </a-camera> */}

        <a-cursor raycaster="objects: .clickable" rayOrigin="mouse"></a-cursor>

        <MenuItem x="0" y="1.6" pos="0" />
        <MenuItem x="0" y="1.6" pos="1" />
        <MenuItem x="0" y="1.6" pos="2" />

        <a-videosphere src="#vid"></a-videosphere>
      </a-scene>
    </div>
  );
}

export default Video360;