import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderCustom() {

  const navigate = useNavigate();
  const [visible, setVisible] = useState("item-visible");

  const handleVisible = () => {
    setVisible(visible ? "item-unvisible" : "item-visible");
  }
  const items = [
    {
      name: "Rutas",
      dir: "/all-routes"
    },
    {
      name: "Conócenos",
      dir: "/about-us"
    }
  ]

  const showItems = (item) => {
    return (
      <h3 onClick={() => navigate(item.dir)}>{item.name}</h3>
    )
  }

  return (
    <>
      <div className="custom-header">
        <div className="overlay-menu">
          <img className={`logo ${visible ? "item-unvisible" : "item-visible"}`} width="200" height="300" src="/img/LogoSabiosGuias.png" alt="Sabios Guías Intérpretes" />
        </div>
        <div className="custom-header-elements">
          <img className={`logo ${visible}`}
            width="200"
            height="300"
            src="/img/LogoSabiosGuias.png"
            alt="Sabios Guías Intérpretes"
          />
          <img
            onClick={handleVisible}
            className={`menu ${visible}`}
            width="200"
            height="300"
            src="/img/menu_mov.png"
            alt="Sabios Guías Intérpretes"
          />
          <div className="items">
            {
              items.map(showItems)
            }
          </div>
        </div>
      </div>
    </>
  );
}
