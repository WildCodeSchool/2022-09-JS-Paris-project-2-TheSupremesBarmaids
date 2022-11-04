/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card";

function CocktailList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

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

  return (
    <div className="cocktailList">
      <h2 className="cocktailListTitle">Nos Cocktails</h2>
      <div className="CocktailListCards">
        <Card posts={posts} loading={loading} />
      </div>
    </div>
  );
}

export default CocktailList;
