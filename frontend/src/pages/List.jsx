import React from "react";
import Footer from "../components/Footer";
import HeaderList from "./List/HeaderList";
import MainList from "./List/MainList";

function List() {
  return (
    <div>
      <HeaderList />
      <MainList />
      <Footer />
    </div>
  );
}

export default List;
