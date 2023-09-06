import "./styles.scss";

export default function BannerInicial() {
  return (
    <>
      <div className="banner-inicial">
        <div className="banner-inicial__content">
          <h1 className="banner-inicial__title">
            Bem vindo ao{" "}
            <span className="banner-inicial__title--bold">salvAE</span>
          </h1>
          <p className="banner-inicial__description">
            Aqui você encontra os melhores produtos para sua casa
          </p>
        </div>
      </div>
    </>
  );
}
