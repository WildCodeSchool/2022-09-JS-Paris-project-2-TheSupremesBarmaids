import React from "react";
import Message from "../../components/Message/Message";
// eslint-disable-next-line no-unused-vars
function MessageScroll(props) {
  return (
    <>
      <Message
        user="Drunken user"
        editable={false}
        message="I want to drink all your cocktails"
        likes={19}
      />
      <div className="bottomBar">
        <div className="loader" />
      </div>
    </>
  );
}

export default MessageScroll;
