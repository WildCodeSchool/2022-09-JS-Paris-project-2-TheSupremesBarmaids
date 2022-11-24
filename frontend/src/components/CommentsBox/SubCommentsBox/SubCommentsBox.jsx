/* eslint-disable import/no-cycle */
import React, { useRef, useState } from "react";
import { useOpenReply } from "../../Message/Message";
import { useMainContext } from "../../../services/Context";

function SubCommentsBox({ parentKey }) {
  const { setMessageUpdate } = useMainContext();

  const changeOpenReply = useOpenReply();
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
    fetch("http://localhost:5000/new-sub-comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messageId: parentKey,
        user: currentUser.name,
        messageData: message.current.value,
      }),
    }).then(() => {
      setMessageUpdate([1, parentKey]);
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
            style={{ color: "grey", backgroundColor: "transparent" }}
            onClick={() => {
              setShowButtons(false);
              changeOpenReply();
            }}
          >
            CANCEL
          </button>
        </>
      )}
    </form>
  );
}

export default SubCommentsBox;
