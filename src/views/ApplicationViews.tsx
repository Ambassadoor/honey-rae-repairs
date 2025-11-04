import { useEffect, useState, type JSX } from "react";
import { CustomerViews } from "./CustomerViews.jsx";
import { EmployeeViews } from "./EmployeeViews.jsx";
import { type UserType } from "../services/employeeService.js";

export const ApplicationViews = (): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<UserType>();

  useEffect(() => {
    const user: string | null = localStorage.getItem("honey_user");
    user && setCurrentUser(JSON.parse(user));
  }, []);

  if (currentUser) {
    return currentUser && currentUser.isStaff ? (
      <EmployeeViews currentUser={currentUser} />
    ) : (
      <CustomerViews currentUser={currentUser} />
    );
  } else {
    return <></>;
  }
};
