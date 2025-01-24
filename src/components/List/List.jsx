function List({ type = "ul", children, ...rest }) {
  return (
    <>
      {type === "ul" ? (
        <ul {...rest}>{children}</ul>
      ) : (
        <ol {...rest}>{children}</ol>
      )}
    </>
  );
}

export default List;
