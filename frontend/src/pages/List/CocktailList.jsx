import Card from "../../components/Card";

function CocktailList() {
  return (
    <div className="cocktailList">
      <h1 className="pageTitle">Nos Cocktails</h1>
      <div className="cocktailListCards">
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
