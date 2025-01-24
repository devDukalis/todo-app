import { useId } from "react";

import Label from "../../components/Label/Label";

function Input({
  className,
  label,
  type = "text",
  placeholder = "your text",
  value,
  onChange,
  autoFocus,
  ...rest
}) {
  const id = useId();

  return (
    <>
      {label && <Label htmlFor={id} />}
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        id={id}
        {...rest}
      />
    </>
  );
}

export default Input;
