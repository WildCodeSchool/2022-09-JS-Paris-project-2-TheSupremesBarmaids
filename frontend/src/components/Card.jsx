import { PropTypes } from "prop-types";

function Card({ posts, loading }) {
  if (loading) {
    return <h2>loading</h2>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div className="cardContainer" key={post.idDrink}>
          <div className="card">
            <img
              className="cardImage"
              src={post.strDrinkThumb}
              alt={post.strDrink}
            />
            <div className="notFavorite" />
            <div className="cardText">
              <h3 className="cardTitle">{post.strDrink}</h3>
              <div>*Note*</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Card.propTypes = {
  posts: PropTypes.arrayOf.isRequired,
};

Card.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Card;
