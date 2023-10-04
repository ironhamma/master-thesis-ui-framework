import React, { useContext, useState } from "react";
import Message from "../components/Message/Message";

const MessagesContext = React.createContext();

export const Messages = () => {
  return (
    <MessagesContext.Consumer>
      {({ messages }) => {
        return (
          messages.length > 0 && (
            <div>
              {messages.map((message) => (
                <Message message={message} />
              ))}
            </div>
          )
        );
      }}
    </MessagesContext.Consumer>
  );
};

export const MessagesContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, { ...message, id: messages.length + 1 }]);
  };
  return (
    <MessagesContext.Provider value={{ messages, addMessage }}>
      {children}
      <Messages />
    </MessagesContext.Provider>
  );
};

MessagesContext.displayName = "MessagesContext";

export const useMessages = () => {
  return useContext(MessagesContext);
};

export const MessagesConsumer = MessagesContext.Consumer;
