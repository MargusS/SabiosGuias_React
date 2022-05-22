import { useEffect, useState } from "react";
import { itemsMenu } from "./itemsMenu";
import { useNavigate } from "react-router-dom";
import OverlayMenu from "./OverlayMenu";

export default function HeaderCustom() {

  const navigate = useNavigate();
  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    if (overlay) {
      document.getElementById("al").style.visibility = "visible";
      document.getElementById("el").style.visibility = "hidden";
      document.getElementById("ul").style.display = "none";
      document.getElementById("ol").style.display = "none";
      setOverlay(!overlay);
    }
  });

  const handleVisible = () => {
    setOverlay(!overlay);
  }

  const showItems = (item, index) => {
    return (
      <h3 key={index} onClick={() => navigate(item.dir)}>{item.name}</h3>
    )
  }

  return (
    <>
      <div id="el" className="custom-header">
        <OverlayMenu />
        <div className="custom-header-elements">
          <div className="logo">
            <img onClick={() => navigate('/')} width="200" height="300" src="/img/LogoSabiosGuias.png" alt="Sabios Guías Intérpretes" />
          </div>
          <img onClick={handleVisible} className="menu" width="200" height="300" src="/img/menu_mov.png" alt="Burger Menu" />
          <div className="items-header">
            {
              itemsMenu.map(showItems)
            }
          </div>
        </div>
      </div>
    </>
  );
}
