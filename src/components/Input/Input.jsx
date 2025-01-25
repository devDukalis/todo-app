import { useId, forwardRef } from "react";
import Label from "../../components/Label/Label";

const Input = forwardRef(function Input(
  {
    className,
    label,
    type = "text",
    placeholder = "your text",
    value,
    onChange,
    autoFocus,
    readOnly,
    ...rest
  },
  ref
) {
  const id = useId();

  return (
    <>
      {label && <Label htmlFor={id} />}
      <input
        ref={ref}
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        id={id}
        readOnly={readOnly}
        {...rest}
      />
    </>
  );
});

export default Input;
