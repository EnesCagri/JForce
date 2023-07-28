import React from "react";
import { UserRole } from "../../services/data";
import AccessPermited from "../pages/AccessPermited";

const IMElement = ({ children, role }) => {
  if (role === UserRole.IM || role === UserRole.AD) {
    return <div>{children}</div>;
  }

  return <AccessPermited />;
};

export default IMElement;
