import React, { useEffect, useState, useRef } from "react";
import Message from "../../components/Message/Message";
import Loader from "../../components/Message/Loader";

import { useMainContext } from "../../services/Context";

function MessageScroll() {
  // When main Context changes. Re-render message List
  const { messageReset, commentIncrement, setCommentIncrement, messageUpdate } =
    useMainContext();

  // Make sure Increment value in callback fc for Observer is up to date
  const commentIncrementRef = useRef(commentIncrement);

  const [messages, setMessages] = useState([]);
  const [showBottomBar, setShowBottomBar] = useState(true);

  // Load up the comments
  useEffect(() => {
    setShowBottomBar(true);
    fetch("http://localhost:5000/get-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ limitNum: 4 }),
    })
      .then((res) => res.json())
      .then((comments) => {
        setMessages(comments);
      });
  }, [messageReset]);

  // Either update or delete individual comment
  function updateComment(commentData) {
    const currentMessage = [...messages];
    if (commentData) {
      const currentMessageIndex = currentMessage.findIndex(
        // eslint-disable-next-line no-underscore-dangle
        (message) => message._id === commentData._id
      );
      currentMessage.splice(currentMessageIndex, 1, commentData);
      setMessages(currentMessage);
    }
  }

  function deleteComment() {
    const currentMessage = [...messages];
    const currentMessageIndex = currentMessage.findIndex(
      // eslint-disable-next-line no-underscore-dangle
      (message) => message._id === messageUpdate[1]
    );
    currentMessage.splice(currentMessageIndex, 1);
    setMessages(currentMessage);
  }

  useEffect(() => {
    if (messageUpdate) {
      // if messageUpdate[0] is 1 then means update. Else we delete
      if (messageUpdate[0] === 1) {
        fetch("http://localhost:5000/update-comment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ commentId: messageUpdate[1] }),
        })
          .then((res) => res.json())
          .then((commentData) => {
            updateComment(commentData);
          });
      } else if (messageUpdate[0] === 2) {
        deleteComment();
      }
    }
  }, [messageUpdate]);

  // Intersection Observer
  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        fetch("http://localhost:5000/get-more-data", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            commentIncrement: commentIncrementRef.current,
          }),
        })
          .then((res) => res.json())
          .then((comments) => {
            if (comments.length > 0) {
              setTimeout(() => {
                setMessages((prevState) => [...prevState, ...comments]);
              }, 3000);
            } else {
              setTimeout(() => {
                setShowBottomBar(false);
              }, 3000);
            }
            let num = commentIncrement;
            setCommentIncrement((num += comments.length));
          });
      }
    }),
    { threshold: 1 }
  );

  // Ensure comment increment is up to date
  useEffect(() => {
    commentIncrementRef.current = commentIncrement;
  }, [commentIncrement]);

  // bottom Bar will contain the bottomBar
  const [bottomBar, setBottomBar] = useState(null);
  useEffect(() => {
    const currentBottomBar = bottomBar;
    const currentObserver = observer.current;
    if (currentBottomBar) {
      currentObserver.observe(currentBottomBar);
    }

    return () => {
      if (currentBottomBar) {
        currentObserver.unobserve(currentBottomBar);
      }
    };
  }, [bottomBar]);

  return (
    <>
      {messages.map((message) => (
        <Message
          // eslint-disable-next-line no-underscore-dangle
          key={message._id}
          // eslint-disable-next-line no-underscore-dangle
          useKey={message._id}
          user={message.user}
          editable={message.editable}
          replies={message.replies}
          message={message.message}
          likes={message.likes}
        />
      ))}
      {messages.length > 3 && showBottomBar ? (
        <div className="bottomBar" ref={setBottomBar}>
          <Loader />
        </div>
      ) : null}
    </>
  );
}

export default MessageScroll;
