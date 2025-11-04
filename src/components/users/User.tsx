import type { JSX } from "react";
import type { UserType } from "../../services/employeeService.js";
import "./User.css";

interface UserProps {
  user: UserType;
}

export const User = ({ user }: UserProps): JSX.Element => {
  return (
    <div className="user">
      <div>
        <div className="user-info">Name</div>
        <div>{user.fullName}</div>
      </div>
      <div>
        <div className="user-info">Email</div>
        <div>{user.email}</div>
      </div>
    </div>
  );
};
