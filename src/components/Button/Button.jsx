const Button = ({ children, onClick }) => {
  return (
    <div className="duckButton" onClick={onClick}>
      {children}
    </div>
  );
};
export default Button;


//TODO: SEO this