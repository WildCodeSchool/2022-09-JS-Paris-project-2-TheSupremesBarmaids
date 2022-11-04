import { PropTypes } from "prop-types";

function Card({ key, imgSrc, imgAlt, name }) {
  return (
    <div className="cardContainer" key={key}>
      <div className="card">
        <img className="cardImage" src={imgSrc} alt={imgAlt} />
        <div className="notFavorite" />
        <div className="cardText">
          <h3 className="cardTitle">{name}</h3>
          <div>*Note*</div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  key: PropTypes.string.isRequired,
};

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

Card.propTypes = {
  imgAlt: PropTypes.string.isRequired,
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
