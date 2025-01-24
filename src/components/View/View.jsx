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
  ...rest
}) {
  return (
    <div className={className} {...rest}>
      <Input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={onToggle}
      />

      <Label>
        <Span className="description" value={value} />
        <Span
          className="created"
          value={`Created ${formatDistanceToNow(time, {
            addSuffix: true,
          })}`}
        />
      </Label>

      <Button className="icon icon-edit" />
      <Button className="icon icon-destroy" onClick={onDelete} />
    </div>
  );
}

export default View;
