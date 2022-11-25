/* eslint-disable import/no-cycle */
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useMainContext } from "../../../services/Context";

function SubCommentsBox({ parentKey, user }) {
  const { setMessageUpdate } = useMainContext();

  const message = useRef(null);
  const [changeOpenReply, setChangeOpenReply] = useState(true);
  const [showCommentLine, setShowCommentLine] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [enableBtn, setEnableBtn] = useState(true);
  // When click on the Input => show the underline and button
  const commentFocus = () => {
    const check = localStorage.getItem("currentUser");
    if (!check) toast("You have to login!");
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
        photo: currentUser.photoURL,
        messageData: message.current.value,
      }),
    }).then(() => {
      setMessageUpdate([1, parentKey]);
      message.current.value = "";
    });
  };
  const prefix = `@${user}  `;
  return (
    <form>
      {changeOpenReply && (
        <section className="commentBox">
          <ToastContainer autoClose={1000} />
          <input
            type="text"
            placeholder={`@${user}`}
            ref={message}
            onChange={(e) => {
              const input = e.target.value;
              e.target.value = prefix + input.substr(prefix.length);
            }}
            onFocus={commentFocus}
            onBlur={commentFocusOut}
            onKeyUp={commentStroke}
          />
          {/* Underline begins here */}
          {showCommentLine && <div className="commentLine" />}
        </section>
      )}
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
              setChangeOpenReply(false);
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
