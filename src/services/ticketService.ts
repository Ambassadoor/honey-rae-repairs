import type { EmployeeTicket } from "./employeeService.js";

export interface ServiceTicket {
  id?: number;
  userId: number;
  description: string;
  emergency: boolean;
  dateCompleted: string;
  employeeTickets?: EmployeeTicket[];
}

export const getAllTickets = (): Promise<ServiceTicket[]> => {
  return fetch(
    "http://localhost:8088/serviceTickets?_embed=employeeTickets",
  ).then((res) => res.json());
};

export const assignTicket = (
  employeeTicket: EmployeeTicket,
): Promise<EmployeeTicket> => {
  return fetch("http://localhost:8088/employeeTickets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employeeTicket),
  }).then((res) => res.json());
};

export const closeTicket = (id: number): Promise<ServiceTicket> => {
  return fetch(`http://localhost:8088/serviceTickets/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dateCompleted: new Date(),
    }),
  }).then((res) => res.json());
};

export const deleteTicket = (id: number): Promise<ServiceTicket> => {
  return fetch(`http://localhost:8088/serviceTickets/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

export const createTicket = (ticket: ServiceTicket): Promise<ServiceTicket> => {
  return fetch("http://localhost:8088/serviceTickets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  }).then((res) => res.json());
};
