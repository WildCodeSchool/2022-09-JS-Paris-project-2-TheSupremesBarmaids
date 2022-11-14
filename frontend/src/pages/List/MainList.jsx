import { useState, useEffect } from "react";
import fetchResetApi from "../../utils/fetchResetApi";
import CocktailList from "./CocktailList";
import ActionBlock from "./ActionBlock";
import Pagination from "./Pagination";

function MainList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const POST_PER_PAGE = 12;
  const [wrongFetch, setWrongFetch] = useState(false);

  // Put the result of the fetch in posts and handle wrong fetch
  const renderApi = (data) => {
    setLoading(true);

    if (data !== null) {
      setPosts(data);
      setLoading(false);
      setWrongFetch(false);
    } else {
      setLoading(false);
      setWrongFetch(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchResetApi().then((resPosts) => renderApi(resPosts));
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
      <ActionBlock renderApi={renderApi} />
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
