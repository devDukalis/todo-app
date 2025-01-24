function Span({ className = "", value = "your text", ...rest }) {
  return (
    <span className={className} {...rest}>
      {value}
    </span>
  );
}

export default Span;
