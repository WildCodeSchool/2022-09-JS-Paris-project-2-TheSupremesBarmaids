import React, { useRef, useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs"
// eslint-disable-next-line no-unused-vars
function Message(props) {
  const likeIcon = useRef();
  const numLikes = useRef();

  const [arrowUp, setArrowUp] = useState(false);
  const [openReply, setOpenReply] = useState(false);

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
  };

  const likeComment = () => {

  };

  const deleteMessage = () => {

  };

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
          ref={likeIcon}
          onClick={likeComment}
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
      <section
        className="arrowReplies"
        onClick={changeArrow}
        aria-hidden="true"
      >
        {arrow}
        <div>View 4 replies</div>
      </section>
    </section>
  );
}
export default Message;
