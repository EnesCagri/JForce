import React from "react";
import AccessPermited from "../pages/AccessPermited";
import { UserRole } from "../../services/data";

const UserElement = ({ children, role }) => {
  const allowedRoles = [UserRole.AD, UserRole.HR, UserRole.IM];

  if (allowedRoles.includes(role)) {
    return <div>{children}</div>;
  }

  return <AccessPermited />;
};

export default UserElement;
