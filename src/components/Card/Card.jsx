import generateClassName from "../generateClass";

const Card = ({ children, width, className }) => {
  return (
    <div
      className={`${generateClassName("duckCard", {
        width: width,
      })} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
