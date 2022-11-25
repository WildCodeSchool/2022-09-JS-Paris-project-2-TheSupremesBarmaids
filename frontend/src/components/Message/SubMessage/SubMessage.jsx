/* eslint-disable import/no-cycle */
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
} from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SubCommentsBox from "../../CommentsBox/SubCommentsBox/SubCommentsBox";
import { useMainContext } from "../../../services/Context";

const showReply = createContext();

export function useOpenReply() {
  return useContext(showReply);
}

function SubMessage({ message, user, id, likes, parentKey, subId, photo }) {
  const { setMessageUpdate } = useMainContext();

  const numLikes = useRef();

  const [openReply, setOpenReply] = useState(false);
  const [likeIcon, setLikeIcon] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);

  const changeOpenReply = useCallback(() => {
    setOpenReply(!openReply);
  }, [openReply]);

  let toggleLike = false;
  let like = likes;
  const likeComment = () => {
    toggleLike = !toggleLike;
    setLikeIcon(toggleLike);
    if (toggleLike) {
      like += 1;
    } else {
      like -= 1;
    }
    numLikes.current.innerHTML = like;
    fetch("http://localhost:5000/update-sub-like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messageId: parentKey, subId, likes: like }),
    });
  };

  const deleteMessage = () => {
    fetch("http://localhost:5000/delete-sub-comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messageId: parentKey, subId }),
    }).then(() => {
      setMessageUpdate([1, parentKey]);
      toast.warn("Reply Deleted", {
        position: "bottom-right",
        theme: "colored",
      });
    });
  };

  useEffect(() => {
    const userCurr = JSON.parse(localStorage.getItem("currentUser"));
    if (userCurr) setCurrentUser(userCurr);
    else setCurrentUser(user);
  }, []);

  return (
    <section className="messageContainer">
      <div id={id} className="messageUser">
        {user}
      </div>
      <img src={photo} alt="logo" className="user-circle" />
      <div className="messageText">{message}</div>
      <section className="messageIconsContainer">
        <AiFillLike
          className="thumbs-up"
          onClick={likeComment}
          style={likeIcon ? { color: "#4688de" } : { color: "gray" }}
        />
        <div ref={numLikes}>{likes}</div>
        <AiFillDislike className="thumbs-down" />
        {user !== currentUser.name ? (
          <div
            onClick={changeOpenReply}
            style={{ cursor: "pointer" }}
            aria-hidden="true"
          >
            REPLY
          </div>
        ) : (
          <div
            onClick={deleteMessage}
            style={{ cursor: "pointer" }}
            aria-hidden="true"
          >
            DELETE
          </div>
        )}
        <ToastContainer autoClose={2000} />
      </section>
      <showReply.Provider value={changeOpenReply}>
        {openReply && (
          <SubCommentsBox parentKey={parentKey} user={user} autoFocus />
        )}
      </showReply.Provider>
    </section>
  );
}

export default SubMessage;
