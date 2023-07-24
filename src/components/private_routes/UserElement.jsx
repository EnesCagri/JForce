import React from "react";
import AccessPermited from "../AccessPermited";

const UserElement = ({ children, role }) => {
  if (role !== "") {
    return <div>{children}</div>;
  }

  return <AccessPermited />;
};

export default UserElement;
