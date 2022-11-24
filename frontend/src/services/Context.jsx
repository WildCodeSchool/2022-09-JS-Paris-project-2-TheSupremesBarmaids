/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export const PostContext = createContext({});
export const ToggleContext = createContext({});

export function useMainContext() {
  return useContext(MainContext);
}

export function ContextProvider({ children }) {
  // The state that allows us trigger, either UPDATE or DELETE request of individual comment
  const [messageUpdate, setMessageUpdate] = useState();
  // This state will be changed when we post a new comment to refresh first 5 messages
  const [messageReset, setMessageReset] = useState(false);
  // This state that holds the current increment value, is used by Observer when we fetch new comments
  const [commentIncrement, setCommentIncrement] = useState(4);

  const value = {
    messageReset,
    setMessageReset,
    messageUpdate,
    setMessageUpdate,
    commentIncrement,
    setCommentIncrement,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
