/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-cycle */
import {
  useRef,
  useState,
  useCallback,
  useContext,
  useEffect,
  createContext,
} from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import CommentsBox from "../CommentsBox/CommentsBox";
import SubMessage from "./SubMessage/SubMessage";

import { useMainContext } from "../../services/Context";

const showReply = createContext();

export function useOpenReply() {
  return useContext(showReply);
}

function Message({ message, user, id, likes, replies, useKey }) {
  const { setMessageUpdate } = useMainContext();
  const numLikes = useRef();

  const [arrowUp, setArrowUp] = useState(false);
  const [openReply, setOpenReply] = useState(false);
  const [likeIcon, setLikeIcon] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);

  const changeOpenReply = useCallback(() => {
    setOpenReply(!openReply);
  }, [openReply]);

  let arrow = <BsCaretDownFill className="caret-down" />;

  const changeArrow = () => {
    setArrowUp(!arrowUp);
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
      like += 1;
    } else {
      like -= 1;
    }
    numLikes.current.innerHTML = like;
    fetch("http://localhost:5000/update-like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
      </section>
      <showReply.Provider value={changeOpenReply}>
        {openReply && <CommentsBox useKey={useKey} autoFocus />}
      </showReply.Provider>
      {replies.length > 0 && (
        <section
          className="arrowReplies"
          onClick={changeArrow}
          aria-hidden="true"
          style={currentUser ? null : { display: "none" }}
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
              subId={reply._id}
              user={reply.user}
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
