import React from "react";
import { USER_ROLES } from "../../App";
import AccessPermited from "../AccessPermited";

const AdminElement = ({ children, role }) => {
  if (role === USER_ROLES.AD) {
    return <div>{children}</div>;
  }

  return <AccessPermited />;
};

export default AdminElement;
