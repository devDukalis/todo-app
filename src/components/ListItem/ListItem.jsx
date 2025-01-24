function ListItem({ className = "", children, ...rest }) {
  return (
    <li className={className} {...rest}>
      {children}
    </li>
  );
}

export default ListItem;
