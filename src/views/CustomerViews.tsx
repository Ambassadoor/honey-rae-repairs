import { Outlet, Route, Routes } from "react-router-dom";
import { CustomerNav } from "../components/nav/CustomerNav.jsx";
import { Welcome } from "../components/welcome/Welcome.jsx";
import { TicketList } from "../components/tickets/TicketList.jsx";
import { TicketForm } from "../components/forms/TicketForm.jsx";
import { type UserType } from "../services/employeeService.js";

// Define what props this component expects
interface CustomerViewsProps {
  currentUser: UserType;
}

export const CustomerViews = ({ currentUser }: CustomerViewsProps) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CustomerNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets">
          <Route index element={<TicketList user={currentUser} />} />
          <Route path="create" element={<TicketForm user={currentUser} />} />
        </Route>
      </Route>
    </Routes>
  );
};
