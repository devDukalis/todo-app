import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Span from "../../components/Span/Span";
import Button from "../../components/Button/Button";

function View({ className = "view", ...rest }) {
  return (
    <div className={className} {...rest}>
      <Input className="toggle" type="checkbox" />
      <Label>
        <Span className="description" />
        <Span className="created" />
      </Label>
      <Button className="icon icon-edit" />
      <Button className="icon icon-destroy" />
    </div>
  );
}

export default View;
