import { useNavigate } from "react-router-dom";

export default function HeaderCustom() {

  const navigate = useNavigate();

  return (
    <>
      <div className="custom-header">
        <div className="custom-header-elements">
          <img
            width="200"
            height="300"
            src="/img/LogoSabiosGuias.png"
            alt="Sabios Guías Intérpretes"
          />
          <img
            className="menu"
            width="200"
            height="300"
            src="/img/menu_mov.png"
            alt="Sabios Guías Intérpretes"
          />
          <div className="items">
            <h3 onClick={navigate(`/`)}>Rutas</h3>
            <h3>Conócenos</h3>
          </div>
        </div>
      </div>
    </>
  );
}
