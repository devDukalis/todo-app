function Header({ value = "your text", ...rest }) {
  return <h1 {...rest}>{value}</h1>;
}

export default Header;
