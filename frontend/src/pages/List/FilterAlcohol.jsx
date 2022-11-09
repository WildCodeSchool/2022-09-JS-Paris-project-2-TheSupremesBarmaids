function FilterAlcohol({ callApi }) {
  // ALCOHOLIC FILTERS
  const alcoholicFilters = ["Alcoholic", "Non_alcoholic", "Optional_alcohol"]; // Every filters a=
  return alcoholicFilters.map((ele) => (
    // Create a div for every alcoholic filters
    <div className="btn1">
      <a
        href="#alcohol_filter"
        className="button"
        onClick={() => callApi("filter.php?", "a=", ele)}
      >
        {ele.replace("_", " ")}
      </a>
    </div>
  ));
}

export default FilterAlcohol;
