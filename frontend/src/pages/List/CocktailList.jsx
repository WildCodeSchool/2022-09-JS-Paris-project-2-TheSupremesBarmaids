/* eslint-disable react/prop-types */
import Card from "../../components/Card";

function CocktailList({ posts, loading }) {
  if (loading) {
    return <h2>loading</h2>;
  }

  return (
    <div className="cocktailList">
      <h1 className="pageTitle">Nos Cocktails</h1>
      <div className="cocktailListCards">
        {posts.map((post) => (
          <Card
            key={post.idDrink}
            id={post.idDrink}
            imgSrc={post.strDrinkThumb}
            imgAlt={post.strDrink}
            name={post.strDrink}
          />
        ))}
      </div>
    </div>
  );
}

export default CocktailList;
