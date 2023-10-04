import { MessagesContextProvider } from "./useMessages";

const HookStore = ({ children }) => {
  return <MessagesContextProvider>{children}</MessagesContextProvider>;
};

export default HookStore;
