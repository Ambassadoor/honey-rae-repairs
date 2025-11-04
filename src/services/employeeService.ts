import type { Customer } from "./userService.js";

export interface UserType {
  id: number;
  fullName: string;
  email: string;
  isStaff: boolean;
  customers?: Customer[];
}

export interface Employee {
  id: number;
  specialty: string;
  rate: number;
  userId: number;
  user?: UserType;
  employeeTickets?: EmployeeTicket[];
}

export interface EmployeeTicket {
  id?: number;
  employeeId: number;
  serviceTicketId: number;
}
export const getAllEmployees = (): Promise<Employee[]> => {
  return fetch("http://localhost:8088/employees?_expand=user").then((res) =>
    res.json(),
  );
};

export const getEmployeeById = (id: number): Promise<Employee[]> => {
  return fetch(
    `http://localhost:8088/employees?userId=${id}&_expand=user&_embed=employeeTickets`,
  ).then((res) => res.json());
};

export const updateProfile = (profile: Employee): Promise<Employee> => {
  return fetch(`http://localhost:8088/employees/${profile.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  }).then((res) => res.json());
};
