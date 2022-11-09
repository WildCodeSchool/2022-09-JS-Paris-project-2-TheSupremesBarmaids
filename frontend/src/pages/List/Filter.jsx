/* eslint-disable react/prop-types */
function Filter({ callApi }) {
  return (
    <div className="filter-btn">
      <div className="btn1">
        <a
          href="#0"
          className="button"
          onClick={() => callApi("filter.php?", "a=", "Non_Alcoholic")}
        >
          Non Alcoholic
        </a>
      </div>
      <div className="btn1">
        <a
          href="#0"
          className="button"
          onClick={() => callApi("filter.php?", "c=", "Ordinary_Drink")}
        >
          Original Drink
        </a>
      </div>
      <div className="btn1">
        <a
          href="#0"
          className="button"
          onClick={() => callApi("filter.php?", "c=", "Cocktail")}
        >
          Cocktails
        </a>
      </div>
      <div className="btn1">
        <a
          href="#0"
          className="button"
          onClick={() => callApi("filter.php?", "g=", "Cocktail_glass")}
        >
          Cocktail Glass
        </a>
      </div>
    </div>
  );
}

export default Filter;
