import { useState, useEffect } from "react";
import fetchRandomApi from "../utils/fetchRandomApi";

function RandomLink() {
  const [random, setRandom] = useState();

  useEffect(() => {
    fetchRandomApi().then((resPosts) => {
      setRandom(resPosts.strDrink);
    });
  }, []);

  return (
    <a href={`/recipe/${random}`} className="buttonType">
      <span className="buttonType__text">Pick one for me !</span>
      <span className="buttonType__icon" />
    </a>
  );
}

export default RandomLink;
