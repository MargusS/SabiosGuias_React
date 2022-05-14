export default function MobileBg() {
  return (
    <>
      <div className="carousel-mb">
        <div className="overlay"></div>
        <div className="carousel">
          <ul>
            <li>
              <picture>
                <source srcSet="/img/bg_mujer_mov.webp" type="image/webp" />
                <img
                  width="200"
                  height="300"
                  src="/img/bg_mujer_mov.jpg"
                  alt="backgorund"
                />
              </picture>
            </li>
            <li>
              <picture>
                <source srcSet="/img/bg_hombre_mov.webp" type="image/webp" />
                <img
                  width="200"
                  height="300"
                  src="/img/bg_hombre_mov.jpg"
                  alt="backgorund"
                />
              </picture>
            </li>
            <li>
              <picture>
                <source srcSet="/img/bg_grupo_mov.webp" type="image/webp" />
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
