import React from "react";
import Message from "../../components/Message/SubMessage/Message";
// eslint-disable-next-line no-unused-vars
function MessageScroll(props) {
  return (
    <>
      <Message
        user="Noob user"
        editable={false}
        message="Noob message"
        likes={19}
      />
      <div className="bottomBar">
        <div className="loader" />
      </div>
    </>
  );
}

export default MessageScroll;
