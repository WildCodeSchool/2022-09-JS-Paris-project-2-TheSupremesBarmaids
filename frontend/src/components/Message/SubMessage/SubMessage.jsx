import React, { useRef, useState, useContext, createContext } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
// eslint-disable-next-line import/no-cycle
import SubCommentsBox from "../../CommentsBox/SubCommentsBox/SubCommentsBox";

import { useMainContext } from "../../../services/Context";

const showReply = createContext();

export function useOpenReply() {
  return useContext(showReply);
}
// eslint-disable-next-line no-unused-vars
function SubMessage({ message, user, id, likes, parentKey, subId }) {
  const { setMessageUpdate } = useMainContext();

  const numLikes = useRef();

  const [openReply, setOpenReply] = useState(false);
  const [likeIcon, setLikeIcon] = useState(false);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const changeOpenReply = () => {
    // eslint-disable-next-line no-return-assign, no-param-reassign
    setOpenReply((prevState) => (prevState = !prevState));
  };

  let toggleLike = false;
  // eslint-disable-next-line prefer-destructuring, react/destructuring-assignment
  let like = likes;
  const likeComment = () => {
    toggleLike = !toggleLike;
    setLikeIcon(toggleLike);
    if (toggleLike) {
      // eslint-disable-next-line no-plusplus
      like++;
      // likeIcon.current.style.color = "blue";
    } else {
      // eslint-disable-next-line no-plusplus
      like--;
      // likeIcon.current.style.color = "gray";
    }
    numLikes.current.innerHTML = like;
    fetch("http://localhost:5000/update-sub-like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // eslint-disable-next-line object-shorthand
      body: JSON.stringify({ messageId: parentKey, subId: subId, likes: like }),
    });
  };

  const deleteMessage = () => {
    fetch("http://localhost:5000/delete-sub-comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // eslint-disable-next-line object-shorthand
      body: JSON.stringify({ messageId: parentKey, subId: subId }),
    }).then(() => {
      setMessageUpdate([1, parentKey]);
    });
  };

  return (
    <section className="messageContainer">
      <div id={id} className="messageUser">
        {user}
      </div>
      <FaUserCircle className="user-circle" />
      <div className="messageText">{message}</div>
      <section className="messageIconsContainer">
        <AiFillLike
          className="thumbs-up"
          onClick={likeComment}
          // ref={likeIcon}
          style={likeIcon ? { color: "#4688de" } : { color: "gray" }}
        />
        <div ref={numLikes}>{likes}</div>
        <AiFillDislike className="thumbs-down" />
        {user !== "Super User" ? (
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
      </section>
      <showReply.Provider value={changeOpenReply}>
        {openReply && <SubCommentsBox parentKey={parentKey} autoFocus />}
      </showReply.Provider>
    </section>
  );
}

export default SubMessage;
