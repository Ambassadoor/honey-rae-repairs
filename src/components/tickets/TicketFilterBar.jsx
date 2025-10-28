import { useNavigate } from "react-router-dom";

export const TicketFilterBar = ({ user, setShowEmergency, setSearchTerm, setShowOpen }) => {

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
