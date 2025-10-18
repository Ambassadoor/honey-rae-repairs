export const TicketFilterBar = ({ setShowEmergency, setSearchTerm }) => {
  return (
    <div className="filter-bar">
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
        type="text"
        placeholder="Search Tickets"
        className="ticket-search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input>
    </div>
  );
};
