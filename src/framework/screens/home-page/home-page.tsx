import BannerInicial from "../../components/home/banner-inicial/banner-inicial";
import "./styles.scss";

export default function HomePage() {
  return (
    <>
      <h1 className="home-page__titulo">Home Page</h1>
      <BannerInicial />
    </>
  );
}
