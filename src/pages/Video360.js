import 'aframe';
import { Entity, Scene } from 'aframe-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "aframe-event-set-component";
import { infoRoutes } from "../components/infoRoutes";
import { Helmet } from 'react-helmet';

function Video360() {
  const { route, stop } = useParams();
  const [current, setCurrent] = useState(parseInt(stop));
  const navigate = useNavigate();
  let infoNextPortal = infoRoutes.filter(array => array.id == parseInt(route));
  let infoStop = infoNextPortal[0].stops;
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
  const routeCheck = (ownRoute) => {
    if (route == ownRoute) {
      return true
    }
    else {
      return false
    }
  };
  const stopClick = (currRoute, nextStop) => {
    if (route == currRoute) {
      handleClick(nextStop);
    }
  };


  return (

    <div className="my-container">
      <Helmet>
        <title>Sabios Guias | VR Route</title>
      </Helmet>
      <Scene cursor={{ rayOrigin: "mouse" }}>
        <a-assets>
          <video id="vid" loop={true} src={`/video/Route-${route}/Route-${route}-Stop-${current}.mp4`} autoPlay={true} > </video>
        </a-assets>

        <a-camera>
          <a-cursor color="white"></a-cursor>
        </a-camera>
        {/* Display de la información */}
        <a-entity visible={routeCheck(1)} position="0 1.6 -5" rotation="0 0 0">
          <a-plane position="0 0 0.05" color="rgb(16, 126, 115)" width="3.8" height="2">
            <a-text value={infoStop[stop - 1]['info']} width="3.5" color="white" align="center"></a-text>
          </a-plane>
        </a-entity>
        {/* Paradas de la ruta 1  */}
        <a-entity visible={routeCheck(1)} position="-3.65 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          {<Entity primitive="a-circle" color="rgb(195, 214, 47)" events={{ mouseenter: (e) => stopClick(1, 1) }} />}
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Natalia Sosa Ayala" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>
        <a-entity visible={infoNextPortal['visible11']} position="-3.65 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          {<Entity primitive="a-circle" color="rgb(16, 126, 115)" />}
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Natalia Sosa Ayala" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>

        <a-entity visible={routeCheck(1)} position="0 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          {<Entity primitive="a-circle" color="rgb(195, 214, 47)" events={{ mouseenter: (e) => stopClick(1, 2) }} />}
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Domingo J Navarro" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>
        <a-entity visible={infoNextPortal['visible12']} position="0 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          {<Entity primitive="a-circle" color="rgb(16, 126, 115)" />}
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Domingo J Navarro" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>

        <a-entity visible={routeCheck(1)} position="3.65 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          {<Entity primitive="a-circle" color="rgb(195, 214, 47)" events={{ mouseenter: (e) => stopClick(1, 3) }} />}
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Benito Perez Galdos" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>
        <a-entity visible={infoNextPortal['visible13']} position="3.65 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          {<Entity primitive="a-circle" color="rgb(16, 126, 115)" />}
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Benito Perez Galdos" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>

        {/* Paradas de la ruta 2 */}
        <a-entity visible={routeCheck(2)} position="-3.75 -3 1.5" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          {<Entity primitive="a-circle" color="rgb(195, 214, 47)" events={{ mouseenter: (e) => stopClick(2, 1) }} />}
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Oficina" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>
        <a-entity visible={infoNextPortal['visible1']} position="-3.75 -3 1.5" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          {<Entity primitive="a-circle" color="rgb(16, 126, 115)" />}
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Oficina" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>

        <a-entity visible={routeCheck(2)} position="-3.75 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          {<Entity primitive="a-circle" color="rgb(195, 214, 47)" events={{ mouseenter: (e) => stopClick(2, 2) }} />}
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Gofio" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>
        <a-entity visible={infoNextPortal['visible2']} position="-3.75 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          <Entity primitive="a-circle" color="rgb(16, 126, 115)" />
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Gofio" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>

        <a-entity visible={routeCheck(2)} position="-1.25 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          {<Entity primitive="a-circle" color="rgb(195, 214, 47)" events={{ mouseenter: (e) => stopClick(2, 3) }} />}
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Premios" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>
        <a-entity visible={infoNextPortal['visible3']} position="-1.25 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          <Entity primitive="a-circle" color="rgb(16, 126, 115)" />
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Premios" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>

        <a-entity visible={routeCheck(2)} position="1.25 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          {<Entity primitive="a-circle" color="rgb(195, 214, 47)" events={{ mouseenter: (e) => stopClick(2, 4) }} />}
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Entrada al barranco" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>
        <a-entity visible={infoNextPortal['visible4']} position="1.25 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          {<Entity primitive="a-circle" color="rgb(16, 126, 115)" />}
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Entrada al barranco" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>

        <a-entity visible={routeCheck(2)} position="3.75 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          {<Entity primitive="a-circle" color="rgb(195, 214, 47)" events={{ mouseenter: (e) => stopClick(2, 5) }} />}
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Camino" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>
        <a-entity visible={infoNextPortal['visible5']} position="3.75 -3 -1" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          {<Entity primitive="a-circle" color="rgb(16, 126, 115)" />}
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Camino" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>

        <a-entity visible={routeCheck(2)} position="3.75 -3 1.5" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          {<Entity primitive="a-circle" color="rgb(195, 214, 47)" events={{ mouseenter: (e) => stopClick(2, 6) }} />}
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Final" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>
        <a-entity visible={infoNextPortal['visible6']} position="3.75 -3 1.5" rotation="-90 90 -90">
          <a-circle position="0 0 -0.01" scale="1.05 1.05 1.05" color="white"></a-circle>
          {<Entity primitive="a-circle" color="rgb(16, 126, 115)" />}
          <a-plane position="0 0 0.05" color="white" width="1.4" height="0.3">
            <a-text value="Final" width="3.5" color="black" align="center"></a-text>
          </a-plane>
        </a-entity>

        <a-entity position="0 -2 5" rotation="215 0 180">
          <a-circle position="0 0 0.01" scale=".7 .7 .7" color="rgb(16, 126, 115)"></a-circle>
          {<Entity primitive="a-circle" scale=".75 .75 .75" color="white" events={{ mouseenter: () => goBack() }} />}
          <a-plane position="0 0 0.05" color="rgb(16, 126, 115)" width="1" height="0.3">
            <a-text value="Volver" width="4.5" color="white" align="center"></a-text>
          </a-plane>
        </a-entity>


        <a-sky id="vid" src="#vid"></a-sky>
      </Scene>
    </div >
  );
}

export default Video360;