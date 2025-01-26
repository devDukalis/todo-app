import { useEffect, useRef } from "react";
import { formatDistanceToNow } from "date-fns";

import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Span from "../../components/Span/Span";
import Button from "../../components/Button/Button";

function View({
  className = "view",
  value = "",
  time,
  completed,
  onToggle,
  onDelete,
  onEdit,
  isEditing,
  editedInputValue,
  setEditedInputValue,
  ...rest
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  return (
    <div className={className} {...rest}>
      <Input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={onToggle}
      />

      <Label>
        {isEditing ? (
          <Input
            className="edit-input"
            value={editedInputValue}
            onChange={(e) => setEditedInputValue(e.target.value)}
            onBlur={onEdit}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onEdit();
              }
            }}
            ref={inputRef}
          />
        ) : (
          <>
            <Input
              className={`description ${completed ? "completed" : ""}`}
              value={value}
              readOnly
            />
            <Span
              className="created"
              value={`Created ${formatDistanceToNow(time, {
                addSuffix: true,
              })}`}
            />
          </>
        )}
      </Label>

      <Button className="icon icon-edit" onClick={onEdit} />
      <Button className="icon icon-destroy" onClick={onDelete} />
    </div>
  );
}

export default View;
