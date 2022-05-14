import { infoRoutes } from "../components/infoRoutes";
import ScrollToTop from "../components/ScrollToTop";
import { useNavigate } from "react-router-dom";
import { infoSabios } from "../components/infoSabios";
import FooterCustom from "../components/FooterCustom";
import HeaderCustom from "../components/HeaderCustom";
import "../css/app.css";

export default function AllRoutes() {
  const navigate = useNavigate();

  const selectStop = (stop) => {
    navigate(`/route-detail/${stop - 1}`);
  }

  const showRoute = (r, index) => {
    return (
      <div key={index} className="all-routes-route-container" onClick={() => selectStop(r.id)}>
        <div className="all-routes-route-id" style={{ backgroundColor: r.color }}>{r.id}</div>
        <div className="all-routes-route-name-and-description">
          <div className="all-routes-route-name">{r.name}</div>
          <div className="all-routes-route-description">{r.description}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      {/* <Header /> */}
      <HeaderCustom />
      <div className="all-routes-container">
        <div>
          <h1 className="all-routes-title">Rutas</h1>
          {
            infoRoutes.map(showRoute)
          }
        </div>
      </div>
      <FooterCustom />
    </>
  );
}