function Button({ className = "", value = "", onClick, ...rest }) {
  return (
    <button className={className} onClick={onClick} {...rest}>
      {value}
    </button>
  );
}

export default Button;
