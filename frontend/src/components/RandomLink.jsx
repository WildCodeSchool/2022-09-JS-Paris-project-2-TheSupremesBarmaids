import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchRandomApi from "../utils/fetchRandomApi";

function RandomLink() {
  const [random, setRandom] = useState();

  useEffect(() => {
    fetchRandomApi().then((resPosts) => {
      setRandom(resPosts.strDrink);
    });
  }, []);

  return (
    <Link to={`/recipe/${random}`} className="buttonType">
      <span className="buttonType__text">Pick one for me !</span>
      <span className="buttonType__icon" />
    </Link>
  );
}

export default RandomLink;
