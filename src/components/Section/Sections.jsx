function Section({ className = "", children, ...rest }) {
  return (
    <section className={className} {...rest}>
      {children}
    </section>
  );
}

export default Section;
