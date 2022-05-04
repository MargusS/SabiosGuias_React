import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="logos">
          <img src="/img/San-Cristobal-CIFP.logo_.png" alt="CIFP San Cristóbal" />
          <img src="/img/LogoIESElRincon-transparent.png" alt="IES El Rincón" />
          <img src="/img/LogoSabiosGuias.png" alt="Sabios Guías Intérpretes" />
        </div>
        <hr />
        <div className="cookies">legal • Política de privacidad • Política de cookies</div>
      </footer>
    </>
  );
}