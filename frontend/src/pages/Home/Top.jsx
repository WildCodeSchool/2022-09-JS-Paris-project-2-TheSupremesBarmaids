import Carousel from "../../components/Carousel";
import Card from "../../components/Card";

function Top() {
  return (
    <div className="top">
      <h1>Top choices here</h1>
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
