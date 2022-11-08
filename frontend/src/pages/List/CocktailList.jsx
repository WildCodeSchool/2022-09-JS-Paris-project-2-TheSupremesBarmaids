import { useState, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved, import/no-absolute-path
import SearchIcon from "/icones/search.svg";
import { motion, AnimatePresence } from "framer-motion";

import Card from "../../components/Card";

const SEARCH_URL = "https://www.thecocktaildb.com/api/json/v1/1/search";

function CocktailList() {
  const [Cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchCocktails = async (name) => {
    const response = await fetch(`${SEARCH_URL}.php?s=${name}`);
    const data = await response.json();
    setCocktails(data.drinks);
  };

  useEffect(() => {
    searchCocktails("all");
  }, []);
  return (
    <div className="cocktailList">
      <h1 className="cocktailListTitle">Search Cocktails</h1>
      <div className="search">
        <input
          className="js-search"
          placeholder="Search Cocktails"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          // className="fa fa-search"
          src={SearchIcon}
          alt="search"
          onClick={() => searchCocktails(searchTerm)}
          aria-hidden="true"
        />
      </div>
      {Cocktails?.length > 0 ? (
        <motion.div
          layout
          transition={{ duration: 0.8, delay: 0.5 }}
          className="container"
        >
          <AnimatePresence>
            {Cocktails.map((ele) => (
              <Card key={ele.idDrink} cocktail={ele} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="empty">
          <h1>No cocktails found</h1>
        </div>
      )}
    </div>
  );
}

export default CocktailList;
