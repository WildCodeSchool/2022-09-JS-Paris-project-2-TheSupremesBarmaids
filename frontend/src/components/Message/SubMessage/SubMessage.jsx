import { useRef, useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import SubCommentsBox from "../../CommentsBox/SubCommentsBox/SubCommentsBox";

import { useMainContext } from "../../../services/Context";

function SubMessage({
  message,
  user,
  id,
  likes,
  parentKey,
  subId,
  changeOpenReply,
  openReply,
}) {
  const { setMessageUpdate } = useMainContext();

  const numLikes = useRef();

  const [likeIcon, setLikeIcon] = useState(false);

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
    fetch("http://localhost:5000/update-sub-like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messageId: parentKey, subId, likes: like }),
    });
  };

  const deleteMessage = () => {
    fetch("http://localhost:5000/delete-sub-comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messageId: parentKey, subId }),
    }).then(() => {
      setMessageUpdate([1, parentKey]);
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
        {user !== "Super User" ? (
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
      {openReply && (
        <SubCommentsBox
          parentKey={parentKey}
          changeOpenReply={changeOpenReply}
          autoFocus
        />
      )}
    </section>
  );
}

export default SubMessage;
