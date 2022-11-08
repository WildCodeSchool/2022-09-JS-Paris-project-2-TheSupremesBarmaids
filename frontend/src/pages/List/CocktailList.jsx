import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import Card from "../../components/Card";

function CocktailList({ posts, loading }) {
  if (loading) {
    return <h2>loading</h2>;
  }

  return (
    <div className="cocktailList">
      <h2 className="cocktailListTitle">Nos Cocktails</h2>
      <div className="CocktailListCards">
        {posts.map((post) => (
          <Link to={`/recipe/${post.idDrink}`} key={post.idDrink}>
            {/* change with strDrin */}
            <Card
              id={post.idDrink}
              imgSrc={post.strDrinkThumb}
              imgAlt={post.strDrink}
              name={post.strDrink}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

CocktailList.propTypes = {
  posts: PropTypes.arrayOf.isRequired,
};

CocktailList.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default CocktailList;
