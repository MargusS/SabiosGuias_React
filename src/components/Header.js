import { useEffect } from 'react';
import "./Header.scss";
import variables from "./Header.scss";

export default function Header() {

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const headerMaxHeight = variables.headerMaxHeight * 16;
      const newHeaderHeight = scrollY < headerMaxHeight / 2 ? Math.round(headerMaxHeight - scrollY) : headerMaxHeight / 2;
      document.documentElement.style.setProperty("--header-height", `${newHeaderHeight}px`);
    });
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-logos">
          <img src="/img/San-Cristobal-CIFP.logo_.png" alt="CIFP San Cristóbal" />
          <img src="/img/LogoIESElRincon-transparent.png" alt="IES El Rincón" />
          <img src="/img/LogoSabiosGuias-Inverso.png" alt="Sabios Guías Intérpretes" />
        </div>
      </header>
      <hr />
    </>
  );
}