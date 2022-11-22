function Card({ id, imgSrc, imgAlt, name }) {
  return (
    <a href={`/recipe/${name}`} className="card" id={id}>
      <img className="cardImage" src={imgSrc} alt={imgAlt} />
      <p className="cardTitle">{name}</p>
    </a>
  );
}

export default Card;
