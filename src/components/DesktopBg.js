export default function DesktopBg() {
  return (
    <>
      <div className="carousel-dp">
        <div className="overlay"></div>
        <div className="carousel">
          <ul>
            <li>
              <picture>
                <source srcSet="/img/bg_1.webp" type="image/webp" />
                <img
                  width="200"
                  height="300"
                  src="/img/bg_1.jpg"
                  alt="backgorund"
                />
              </picture>
            </li>
            <li>
              <picture>
                <source srcSet="/img/bg_2.webp" type="image/webp" />
                <img
                  width="200"
                  height="300"
                  src="/img/bg_2.jpg"
                  alt="backgorund"
                />
              </picture>
            </li>
            <li>
              <picture>
                <source srcSet="/img/bg_3.webp" type="image/webp" />
                <img
                  width="200"
                  height="300"
                  src="/img/bg_grupo_mov.jpg"
                  alt="backgorund"
                />
              </picture>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
