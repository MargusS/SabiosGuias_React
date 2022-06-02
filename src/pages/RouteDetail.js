import { useNavigate, useParams } from "react-router-dom";
import StopMap from "../components/StopMap";
import { infoRoutes } from "../components/infoRoutes";
import ScrollToTop from "../components/ScrollToTop";
import "./RouteDetail.css";
import { useEffect } from "react";
import { infoSabios } from "../components/infoSabios";
import FooterCustom from "../components/FooterCustom";
import HeaderCustom from "../components/HeaderCustom";
import "../css/app.css";
import { Helmet } from 'react-helmet';

export default function RouteDetail() {
  let { id } = useParams();

  const navigate = useNavigate();

  const showRoute = (r) => {
    return (
      <div className="route-detail-container">
        <div className="route-detail-id" style={{ backgroundColor: r.color }}>{r.id}</div>
        <div className="route-detail-name-and-description">
          <div className="route-detail-name">{r.name}</div>
          <div className="route-detail-description">{r.description}</div>
          {
            infoRoutes[id].stops.map(showStop)
          }
        </div>
      </div>
    );
  }

  const showVideo360 = (route, stop) => {
    navigate(`/video-360/${route}/${stop}`);
  }

  const showStop = (stop, index) => {
    return (
      <div key={index} className="route-detail-stops" onClick={() => showVideo360(parseInt(id) + 1, index + 1)}>
        <span>Parada {stop.idStop}:</span> {stop.name}
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Sabios Guias | Details</title>
      </Helmet>
      <ScrollToTop />
      <HeaderCustom />
      <div id="ul" className="route-detail-outer-container">
        {
          showRoute(infoRoutes[id])
        }
        <div className="route-detail-stop-map">
          <StopMap location={infoRoutes[id].stops[0].location} />
        </div>
      </div>
      <FooterCustom />
    </>
  );
}