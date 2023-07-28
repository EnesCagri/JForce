import React from "react";
import { Button } from "flowbite-react";

const ActionButton = ({ actionFunction, item, label, style }) => {
  return (
    <Button color={style} onClick={() => actionFunction(item)}>
      {label}
    </Button>
  );
};

export default ActionButton;
