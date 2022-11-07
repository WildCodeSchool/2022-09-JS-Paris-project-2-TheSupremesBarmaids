import Card from "../../components/Card";

function CocktailList() {
  return (
    <div className="cocktailList">
      <h2 className="cocktailListTitle">Search Cocktails</h2>
      <div className="CocktailListCards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default CocktailList;
