import { useState, useEffect } from "react";
import CocktailList from "./CocktailList";
import ActionBlock from "./ActionBlock";
import Pagination from "./Pagination";

const API = "https://www.thecocktaildb.com/api/json/v1/1/";

function MainList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const POST_PER_PAGE = 12;
  const [wrongApi, setWrongApi] = useState(false);

  const callApi = async (filter, category, name) => {
    setLoading(true);
    const response = await fetch(`${API}${filter}${category}${name}`);
    const data = await response.json();
    if (data.drinks !== null) {
      setPosts(data.drinks);
      setLoading(false);
      setWrongApi(false);
    } else {
      setLoading(false);
      setWrongApi(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    callApi("filter.php?", "i=", "Gin").then(() => setLoading(false));
  }, []);

  const indexOfLastPost = currentPage * POST_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POST_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <main className="mainList containerType1 containerType1--padd20">
      <ActionBlock callApi={callApi} />
      <CocktailList
        posts={currentPosts}
        loading={loading}
        wrongApi={wrongApi}
      />
      <Pagination
        postsPerPage={POST_PER_PAGE}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </main>
  );
}

export default MainList;
