import { useNavigate } from "react-router-dom";
import { type UserType } from "../../services/employeeService.js";
import type { JSX } from "react";

interface TicketFilterBarProps {
  user: UserType;
  setShowEmergency: (b: boolean) => void;
  setSearchTerm: (s: string) => void;
  setShowOpen: (b: boolean) => void;
}

export const TicketFilterBar = ({ user, setShowEmergency, setSearchTerm, setShowOpen }: TicketFilterBarProps): JSX.Element => {

  const navigate = useNavigate()

  return (
    <div className="filter-bar">
      {user.isStaff ? <>
      <button
        className="filter-btn btn-primary"
        onClick={() => {
          setShowEmergency(true);
        }}
      >
        {" "}
        Emergency
      </button>
      <button
        className="filter-btn btn-info"
        onClick={() => {
          setShowEmergency(false);
        }}
      >
        Show All
      </button>
      <input
        name="ticket-search"
        type="text"
        placeholder="Search Tickets"
        className="ticket-search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input> </> : <>
        <button 
          className="filter-btn btn-primary"
          onClick={() => {
            navigate("/tickets/create")
          }}
          >Create Ticket</button>
        <button 
          className="filter-btn btn-info"
          onClick={() => {setShowOpen(true)}}
          >Open Tickets</button>
        <button 
          className="filter-btn btn-secondary"
          onClick={() => {setShowOpen(false)}} 
          >All My Tickets</button>
      </>}
    </div>
  );
};
