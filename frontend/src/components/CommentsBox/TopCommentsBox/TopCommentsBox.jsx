import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

function TopCommentsBox(props) {
  const message = useRef(null);
  const [showCommentLine, setShowCommentLine] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [enableBtn, setEnableBtn] = useState(true);
  // When click on the Input => show the underline and button
  const commentFocus = () => {
    setShowCommentLine(true);
    setShowButtons(true);
  };
  // When click on button => hide the underline
  const commentFocusOut = () => {
    setShowCommentLine(false);
  };

  const commentStroke = (event) => {
    const currentMessage = event.target.value;
    // eslint-disable-next-line no-unused-expressions
    currentMessage ? setEnableBtn(false) : setEnableBtn(true);
  };

  const sendComment = (event) => {
    event.preventDefault();
  };
  return (
    <form>
      <section className="commentBox">
        <input
          autoFocus={props.autoFocus}
          type="text"
          placeholder="Add your comments here..."
          ref={message}
          onFocus={commentFocus}
          onBlur={commentFocusOut}
          onKeyUp={commentStroke}
        />
        {/* Underline begins here */}
        {showCommentLine && <div className="commentLine" />}
      </section>
      {showButtons && (
        <>
          <button
            type="button"
            className="commentButton sendButton"
            disabled={enableBtn}
            onClick={sendComment}
          >
            COMMENT
          </button>
          <button
            className="commentButton"
            type="button"
            style={{ color: "grey", backgroundColor: "transparent" }}
            onClick={() => {
              setShowButtons(false);
              message.current.value = "";
            }}
          >
            CANCEL
          </button>
        </>
      )}
    </form>
  );
}

export default TopCommentsBox;
