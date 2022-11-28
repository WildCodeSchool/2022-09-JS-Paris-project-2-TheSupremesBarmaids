import { useState, useEffect, useContext } from "react";
import { PostContext } from "../../services/Context";
import fetchResetApi from "../../utils/fetchResetApi";
import CocktailList from "./CocktailList";
import ActionBlock from "./ActionBlock";
import Pagination from "./Pagination";

function MainList() {
  const { posts, setPosts, loading, setLoading, wrongFetch, setWrongFetch } =
    useContext(PostContext);
  const [currentPage, setCurrentPage] = useState(1);
  const POST_PER_PAGE = 12;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    setLoading(true);
    fetchResetApi()
      .then((resPosts) => {
        setPosts(resPosts);
        setLoading(false);
        setWrongFetch(false);
      })
      .catch(() => {
        setLoading(false);
        setWrongFetch(true);
      });
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
      <ActionBlock />
      <CocktailList
        posts={currentPosts}
        loading={loading}
        wrongFetch={wrongFetch}
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
