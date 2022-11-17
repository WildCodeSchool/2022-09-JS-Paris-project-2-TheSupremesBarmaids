import React, { useRef, useState, useContext, createContext } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
// eslint-disable-next-line import/no-cycle
import SubCommentsBox from "../../CommentsBox/SubCommentsBox/SubCommentsBox";

const showReply = createContext();

export function useOpenReply() {
  return useContext(showReply);
}
// eslint-disable-next-line no-unused-vars
function SubMessage(props) {
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
  let { likes } = props;
  const likeComment = () => {
    toggleLike = !toggleLike;
    setLikeIcon(toggleLike);
    if (toggleLike) {
      // eslint-disable-next-line no-plusplus
      likes++;
      // likeIcon.current.style.color = "blue";
    } else {
      // eslint-disable-next-line no-plusplus
      likes--;
      // likeIcon.current.style.color = "gray";
    }
    numLikes.current.innerHTML = likes;
  };

  const deleteMessage = () => {};

  return (
    <section className="messageContainer">
      <div id={props.id} className="messageUser">
        {props.user}
      </div>
      <FaUserCircle className="user-circle" />
      <div className="messageText">{props.message}</div>
      <section className="messageIconsContainer">
        <AiFillLike
          className="thumbs-up"
          onClick={likeComment}
          // ref={likeIcon}
          style={likeIcon ? { color: "#4688de" } : { color: "gray" }}
        />
        <div ref={numLikes}>{props.likes}</div>
        <AiFillDislike className="thumbs-down" />
        {!props.editable ? (
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
        {openReply && <SubCommentsBox autoFocus />}
      </showReply.Provider>
    </section>
  );
}

export default SubMessage;
