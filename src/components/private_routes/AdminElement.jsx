import React from "react";
import { UserRole } from "../../services/data";
import AccessPermited from "../pages/AccessPermited";

const AdminElement = ({ children, role }) => {
  if (role === UserRole.AD) {
    return <div>{children}</div>;
  }

  return <AccessPermited />;
};

export default AdminElement;
