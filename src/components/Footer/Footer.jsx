function Footer({ className = "", children, ...rest }) {
  return (
    <footer className={className} {...rest}>
      {children}
    </footer>
  );
}

export default Footer;
