import React from "react";
import { UserRole } from "../../services/data";
import AccessPermited from "../pages/AccessPermited";

const HRElement = ({ children, role }) => {
  if (role === UserRole.HR || role === UserRole.AD) {
    return <div>{children}</div>;
  }

  return <AccessPermited />;
};

export default HRElement;
