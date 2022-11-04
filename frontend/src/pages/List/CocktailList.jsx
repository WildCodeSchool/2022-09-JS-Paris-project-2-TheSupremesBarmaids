import { PropTypes } from "prop-types";

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
          <Card
            key={post.idDrink}
            imgSrc={post.strDrinkThumb}
            imgAlt={post.strDrink}
            name={post.strDrink}
          />
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
