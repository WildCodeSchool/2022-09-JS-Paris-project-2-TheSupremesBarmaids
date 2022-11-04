import { useState, useEffect } from "react";
import axios from "axios";
import CocktailList from "./CocktailList";
import ActionBlock from "./ActionBlock";
import Pagination from "./Pagination";

function MainList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin"
      );
      setPosts(res.data.drinks);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <main className="mainList">
      <ActionBlock />
      <CocktailList posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </main>
  );
}

export default MainList;
