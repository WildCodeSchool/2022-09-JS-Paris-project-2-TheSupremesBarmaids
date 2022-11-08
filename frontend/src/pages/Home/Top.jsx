import Carousel from "../../components/Carousel";
import Card from "../../components/Card";

function Top() {
  return (
    <div className="top">
      <h2 className="linedTitle">
        <span className="linedTitle__text">Notre top 5</span>
      </h2>
      <Carousel>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
    </div>
  );
}

export default Top;
