/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import CocktailList from "./CocktailList";
import ActionBlock from "./ActionBlock";

function MainList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

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

  return (
    <main className="mainList">
      <ActionBlock />
      <CocktailList posts={currentPosts} loading={loading} />
    </main>
  );
}

export default MainList;
