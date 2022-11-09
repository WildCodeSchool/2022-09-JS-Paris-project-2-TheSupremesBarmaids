import CocktailList from "./CocktailList";
import ActionBlock from "./ActionBlock";

function MainList() {
  return (
    <main className="mainList containerType1 containerType1--padd20">
      <ActionBlock />
      <CocktailList />
    </main>
  );
}

export default MainList;
