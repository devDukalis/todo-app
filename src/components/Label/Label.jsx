function Label({ children, htmlFor, ...rest }) {
  return (
    <label htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
}

export default Label;
