import Carousel from "../../components/Carousel";
import Card from "../../components/Card";

function Top() {
  const topCocktails = [
    {
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/fi67641668420787.jpg",
      strAlcoholic: "Sex on the Beach",
      idDrink: "12754",
    },
    {
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/k0508k1668422436.jpg",
      strAlcoholic: "Gin And Tonic",
      idDrink: "11403",
    },
    {
      strDrinkThumb: "/top-cocktails/espresso-martini.jpg",
      strAlcoholic: "Espresso Martini",
      idDrink: "17212",
    },
    {
      strDrinkThumb: "/top-cocktails/gimlet.jpg",
      strAlcoholic: "Gimlet",
      idDrink: "17255",
    },
    {
      strDrinkThumb: "/top-cocktails/margarita.jpg",
      strAlcoholic: "Margarita",
      idDrink: "11007",
    },
  ];
  return (
    <div className="top">
      <h2 className="linedTitle">
        <span className="linedTitle__text">Notre top 5</span>
      </h2>
      <Carousel>
        {topCocktails.map((ele) => (
          <Card
            key={ele.idDrink}
            id={ele.idDrink}
            imgSrc={ele.strDrinkThumb}
            imgAlt={ele.strDrink}
            name={ele.strAlcoholic}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Top;
