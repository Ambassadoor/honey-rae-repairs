import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService.js";
import "./Ticket.css";
import { Ticket } from "./Ticket.jsx";
import { TicketFilterBar } from "./TicketFilterBar.jsx";

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergency, setShowEmergency] = useState(false);
  const [displayedTickets, setDisplayedTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllTickets().then((tickets) => {
      setAllTickets(tickets);
    });
  }, []);

  useEffect(() => {
    setDisplayedTickets(
      allTickets.filter((ticket) => (showEmergency ? ticket.emergency : true)),
    );
  }, [showEmergency, allTickets]);

  useEffect(() => {
    setDisplayedTickets(
      allTickets.filter((ticket) => ticket.description.includes(searchTerm)),
    );
  }, [searchTerm, allTickets]);

  return (
    <>
      <div className="tickets-container">
        <h2>Tickets</h2>
        <TicketFilterBar
          setShowEmergency={setShowEmergency}
          setSearchTerm={setSearchTerm}
        ></TicketFilterBar>
        <article className="tickets">
          {displayedTickets.map((ticket) => {
            return <Ticket ticket={ticket} key={ticket.id}></Ticket>;
          })}
        </article>
      </div>
    </>
  );
};
