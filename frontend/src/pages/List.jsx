/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from "react";
import { motion } from "framer-motion";
import { PostContext, ToggleContext } from "../services/Context";
import Footer from "../components/Footer";
import HeaderList from "./List/HeaderList";
import MainList from "./List/MainList";

function List() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [wrongFetch, setWrongFetch] = useState(false);
  const [isActionBlockOpened, setIsActionBlockOpened] = useState(false);
  const [filterSelected, setFilterSelected] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%", transition: { duration: 0.5 } }}
      exit={{ width: "-100%", transition: { duration: 0.3 } }}
    >
      <ToggleContext.Provider
        value={{
          isActionBlockOpened,
          setIsActionBlockOpened,
          filterSelected,
          setFilterSelected,
          searchTerm,
          setSearchTerm,
        }}
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
    </motion.div>
  );
}

export default List;
