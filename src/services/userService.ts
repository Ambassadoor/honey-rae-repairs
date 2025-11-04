import type { UserType } from "./employeeService.js";

export interface Customer {
  id: number;
  address: string;
  phoneNumber: string;
  userId: number;
}

export const getNonStaffUsers = (): Promise<UserType[]> => {
    return fetch("http://localhost:8088/users?isStaff=false").then(res => res.json())
}

export const getStaffUsers = (): Promise<UserType[]> => {
    return fetch("http://localhost:8088/users?isStaff=true").then(res => res.json())
}

export const getCustomerById = (id: number): Promise<UserType> => {
    return fetch(`http://localhost:8088/users/${id}?_embed=customers`).then(res => res.json())
}
export const getUserByEmail = (email: string): Promise<UserType[]> => {
  return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
    res.json()
  )
}

export const createUser = (user: UserType): Promise<UserType> => {
  return fetch("http://localhost:8088/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json())
}
