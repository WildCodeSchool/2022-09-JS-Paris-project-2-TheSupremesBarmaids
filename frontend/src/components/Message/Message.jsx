import React, { useRef, useState, useContext, createContext } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
// eslint-disable-next-line import/no-cycle
import CommentsBox from "../CommentsBox/CommentsBox";
import SubMessage from "./SubMessage/SubMessage";

const showReply = createContext();

export function useOpenReply() {
  return useContext(showReply);
}
// eslint-disable-next-line no-unused-vars
function Message(props) {
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
        {openReply && <CommentsBox autoFocus />}
      </showReply.Provider>
      <section
        className="arrowReplies"
        onClick={changeArrow}
        aria-hidden="true"
      >
        {arrow}
        <div>View 4 replies</div>
      </section>
      {arrowUp && (
        <section className="subMessages">
          <SubMessage
            user="Noob Reply"
            message="THis is a noob reply"
            likes={2}
          />
        </section>
      )}
    </section>
  );
}
export default Message;
