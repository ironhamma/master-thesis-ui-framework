import Card from "../Card/Card";

const Message = ({ message }) => {
  return <Card>{message.text}</Card>;
};

export default Message;


//TODO: Remove card in the future