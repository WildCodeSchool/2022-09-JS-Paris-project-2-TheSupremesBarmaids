/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from "react";
import { PostContext, ToggleContext } from "../services/Context";
import Footer from "../components/Footer";
import HeaderList from "./List/HeaderList";
import MainList from "./List/MainList";

function List() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [wrongFetch, setWrongFetch] = useState(false);
  const [isActionBlockOpened, setIsActionBlockOpened] = useState(false);

  return (
    <>
      <ToggleContext.Provider
        value={{ isActionBlockOpened, setIsActionBlockOpened }}
      >
        <HeaderList />
        <PostContext.Provider
          value={{
            posts,
            setPosts,
            loading,
            setLoading,
            wrongFetch,
            setWrongFetch,
          }}
        >
          <MainList />
        </PostContext.Provider>
      </ToggleContext.Provider>
      <Footer />
    </>
  );
}

export default List;
