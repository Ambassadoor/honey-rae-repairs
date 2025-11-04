import { Outlet, Route, Routes } from "react-router-dom"
import { EmployeeNav } from "../components/nav/EmployeeNav.js"
import { Welcome } from "../components/welcome/Welcome.js"
import { TicketList } from "../components/tickets/TicketList.js"
import { EmployeeList } from "../components/employees/EmployeeList.js"
import { EmployeeDetails } from "../components/employees/EmployeeDetails.js"
import { CustomerList } from "../components/customers/CustomerList.js"
import { CustomerDetails } from "../components/customers/CustomerDetails.js"
import { EmployeeForm } from "../components/forms/EmployeeForm.js"
import { type UserType } from "../services/employeeService.js"

// Define what props this component expects
interface EmployeeViewsProps {
  currentUser: UserType;
}

export const EmployeeViews = ({ currentUser }: EmployeeViewsProps) => {


    return (
      <Routes>
        <Route path="/" element={
          <>
            <EmployeeNav/>
            <Outlet/>
        </>}>
          <Route index element={<Welcome/>}/>
          <Route path="tickets" element={<TicketList user={currentUser}/>} />
          <Route path="employees">
            <Route index element={<EmployeeList/>}/>
            <Route path=":id" element={<EmployeeDetails/>}/>
          </Route>
          <Route path="customers">
            <Route index element={<CustomerList/>}/>
            <Route path=":id" element={<CustomerDetails/>}/>
          </Route>
          <Route path="profile" element={<EmployeeForm user={currentUser}/>}/>
        </Route>
      </Routes>
    )
}