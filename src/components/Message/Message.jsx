import Card from "../Card/Card";

function Message({ message }) {
  return <Card>{message.text}</Card>;
}

export default Message;

// TODO: Remove card in the future
