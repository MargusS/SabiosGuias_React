import { useState } from "react";
import { itemsMenu } from "./itemsMenu";
import { useNavigate } from "react-router-dom";

export default function HeaderCustom() {

  const navigate = useNavigate();
  const [visible, setVisible] = useState("item-visible");

  const handleVisible = () => {
    setVisible(visible == "item-visible" ? "item-unvisible" : "item-visible");
  }

  const showItems = (item, index) => {
    return (
      <h3 key={index} onClick={() => navigate(item.dir)}>{item.name}</h3>
    )
  }

  return (
    <>
      <div className="custom-header">
        <div className={`overlay-menu ${visible == "item-visible" ? "item-unvisible" : "item-visible"}`}>
          <img className="logo" width="200" height="300" src="/img/LogoSabiosGuias.png" alt="Sabios Guías Intérpretes" />
          <div className={`items-overlay ${visible == "item-visible" ? "item-unvisible" : "item-visible"}`}>
            {
              itemsMenu.map(showItems)
            }
          </div>
          <div onClick={handleVisible} className="bt-close">
            <h3>X</h3>
          </div>
        </div>
        <div className="custom-header-elements">
          <img className={`logo ${visible}`} width="200" height="300" src="/img/LogoSabiosGuias.png" alt="Sabios Guías Intérpretes" />
          <img onClick={handleVisible} className={`menu ${visible}`} width="200" height="300" src="/img/menu_mov.png" alt="Burger Menu" />
          <div className={`items-header ${visible == "item-visible" ? "item-unvisible" : "item-visible"}`}>
            {
              itemsMenu.map(showItems)
            }
          </div>
        </div>
      </div>
    </>
  );
}
