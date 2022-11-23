import React, { useRef, useState } from "react";

import { useMainContext } from "../../../services/Context";

function TopCommentsBox() {
  const { setMessageReset, setCommentIncrement } = useMainContext();
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
    if (currentMessage) setEnableBtn(false);
    else setEnableBtn(true);
  };

  // take User name from Local storage

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const sendComment = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/new-comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messageData: message.current.value,
        user: currentUser.name,
      }),
    }).then(() => {
      // Reset entire comments and matching increment counter
      setMessageReset((prevState) => !prevState);
      setCommentIncrement(4);
      // Delete Text Input, update comments and disable COMMENT Btn
      message.current.value = "";
      setEnableBtn(true);
    });
  };

  return (
    <form>
      <section className="commentBox">
        <input
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
            style={{ color: "gray", backgroundColor: "transparent" }}
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
