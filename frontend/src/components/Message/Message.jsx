import React, { useRef, useState, useContext, createContext } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
// eslint-disable-next-line import/no-cycle
import CommentsBox from "../CommentsBox/CommentsBox";
// eslint-disable-next-line import/no-cycle
import SubMessage from "./SubMessage/SubMessage";

import { useMainContext } from "../../services/Context";

const showReply = createContext();

export function useOpenReply() {
  return useContext(showReply);
}
// eslint-disable-next-line no-unused-vars
function Message({ message, user, id, editable, likes, replies, useKey }) {
  const { setMessageUpdate } = useMainContext();
  const numLikes = useRef();

  const [arrowUp, setArrowUp] = useState(false);
  const [openReply, setOpenReply] = useState(false);
  const [likeIcon, setLikeIcon] = useState(false);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const changeOpenReply = () => {
    // eslint-disable-next-line no-return-assign, no-param-reassign
    setOpenReply((prevState) => (prevState = !prevState));
  };

  let arrow = <BsCaretDownFill className="caret-down" />;

  const changeArrow = () => {
    // eslint-disable-next-line no-return-assign, no-param-reassign
    setArrowUp((prevState) => (prevState = !prevState));
  };

  if (arrowUp) {
    arrow = <BsCaretUpFill className="caret-up" />;
  } else {
    arrow = <BsCaretDownFill className="caret-down" />;
  }
  let toggleLike = false;
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
    fetch("http://localhost:5000/update-like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // eslint-disable-next-line object-shorthand
      body: JSON.stringify({ messageId: useKey, likes: like }),
    });
  };

  const deleteMessage = () => {
    fetch("http://localhost:5000/delete-comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messageId: useKey }),
    }).then(() => {
      setMessageUpdate([2, useKey]);
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
          style={likeIcon ? { color: "#4688de" } : { color: "gray" }}
        />
        <div ref={numLikes}>{likes}</div>
        <AiFillDislike className="thumbs-down" />
        {!editable ? (
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
        {openReply && <CommentsBox useKey={useKey} autoFocus />}
      </showReply.Provider>
      {replies.length > 0 && (
        <section
          className="arrowReplies"
          onClick={changeArrow}
          aria-hidden="true"
        >
          {arrow}
          <div>View {replies.length} replies</div>
        </section>
      )}
      {arrowUp && (
        <section className="subMessages">
          {replies.map((reply) => (
            <SubMessage
              key={Math.random()}
              parentKey={useKey}
              // eslint-disable-next-line no-underscore-dangle
              subId={reply._id}
              user={reply.user}
              editable={reply.editable}
              replies={reply.replies}
              message={reply.message}
              likes={reply.likes}
            />
          ))}
        </section>
      )}
    </section>
  );
}
export default Message;
