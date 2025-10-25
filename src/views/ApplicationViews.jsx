import { CustomerList } from "../components/customers/CustomerList.jsx";
import { TicketList } from "../components/tickets/TicketList.jsx";
import { EmployeeList } from "../components/employees/EmployeeList.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar.jsx";
import { Welcome } from "../components/welcome/Welcome.jsx";
import { CustomerDetails } from "../components/customers/CustomerDetails.jsx";
import { EmployeeDetails } from "../components/employees/EmployeeDetails.jsx";
import { useEffect, useState } from "react";
import { EmployeeForm } from "../components/forms/EmployeeForm.jsx";



export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("honey_user")))
  }, [])

  return <>
      <Routes>
        <Route path="/" element={
          <>
            <NavBar/>
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
        </Route>
        <Route path="profile" element={<EmployeeForm user={currentUser}/>}/>
      </Routes>
  </>
}
