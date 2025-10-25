import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeService.js";
import { assignTicket, closeTicket } from "../../services/ticketService.js";

export const Ticket = ({ ticket, user, getAndSetTickets }) => {
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});

  useEffect(() => {
    //setEmployees(getAllEmployees())
    getAllEmployees().then((res) => setEmployees(res));
  }, []);

  useEffect(() => {
    setAssignedEmployee(
      employees.find(
        (employee) => employee.id === ticket.employeeTickets[0]?.employeeId,
      ),
    );
  }, [employees, ticket]);

  const handleClaim = () => {
    const newEmployeeTicket = {
      employeeId: employees.find(e => e.userId === user.id).id,
      serviceTicketId: ticket.id
    }

    assignTicket(newEmployeeTicket).then(() => {
      getAndSetTickets()
    })
  }

  const handleClose = () => {
    closeTicket(ticket.id).then(() => 
    getAndSetTickets())
  }

  return (
    <section className="ticket">
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">assignee</div>
          <div>
            {assignedEmployee ? assignedEmployee.user?.fullName : "None"}
          </div>
        </div>
        <div>
          <div className="ticket-info">emergency</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
        <div className="btn-container">
          {user.isStaff ? (
            <>
              {/* If the logged in user is an employee and there's no employee ticket associated with 
                  the service ticket, then a button to claim the ticket should display */}
              {!assignedEmployee ? (
                <button className="btn btn-secondary" onClick={handleClaim}>Claim</button>
              ) : ""}
              {/* If the logged in user is the assigned employee for the ticket and there is no dateCompleted,
                  then a button to close the ticket should display */}
              {ticket.dateCompleted === "" && assignedEmployee?.userId === user.id ? (
                <button className="btn btn-warning" onClick={handleClose}>Close</button>
              ) : ""}
            </>
          ) : ""}
        </div>
      </footer>
    </section>
  );
};
