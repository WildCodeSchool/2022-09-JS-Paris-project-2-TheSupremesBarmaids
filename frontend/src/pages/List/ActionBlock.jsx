import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";

const FILTER_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?";

function ActionBlock() {
  const [Cocktails, setCocktails] = useState([]);

  const filterCocktails = async (name) => {
    const response = await fetch(`${FILTER_URL}${name}`);
    const data = await response.json();
    setCocktails(data.drinks);
  };

  useEffect(() => {
    filterCocktails("g=Champagne_flute");
  }, []);
  return (
    <div className="action-block">
      <div className="filter-btn">
        <div className="btn1">
          <a
            href="#0"
            className="button"
            onClick={() => filterCocktails("a=Non_Alcoholic")}
          >
            Non Alcoholic
          </a>
        </div>
        <div className="btn1">
          <a
            href="#0"
            className="button"
            onClick={() => filterCocktails("c=Ordinary_Drink")}
          >
            Original Drink
          </a>
        </div>
        <div className="btn1">
          <a
            href="#0"
            className="button"
            onClick={() => filterCocktails("c=Cocktail")}
          >
            Cocktails
          </a>
        </div>
        <div className="btn1">
          <a
            href="#0"
            className="button"
            onClick={() => filterCocktails("g=Cocktail_glass")}
          >
            Cocktail Glass
          </a>
        </div>
      </div>
      <motion.div layout className="top">
        <Carousel>
          {Cocktails.map((ele) => (
            <Card key={ele.idDrink} cocktail={ele} />
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
}

export default ActionBlock;
