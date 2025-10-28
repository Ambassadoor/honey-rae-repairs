import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService.js";
import "./Ticket.css";
import { Ticket } from "./Ticket.jsx";
import { TicketFilterBar } from "./TicketFilterBar.jsx";

export const TicketList = ({user}) => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergency, setShowEmergency] = useState(false);
  const [displayedTickets, setDisplayedTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showOpen, setShowOpen] = useState(false);

  const getAndSetTickets = () => {
      getAllTickets().then((tickets) => {
        user.isStaff ? setAllTickets(tickets) : setAllTickets(tickets.filter(t => t.userId === user.id));
    });
  }

  useEffect(() => {
    getAndSetTickets()
  }, [user]);

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

  useEffect(() => {
    setDisplayedTickets(
      showOpen ? allTickets.filter((ticket) => ticket.dateCompleted === "") : allTickets
    )
  }, [showOpen, allTickets])

  return (
    <>
      <div className="tickets-container">
        <h2>Tickets</h2>
        <TicketFilterBar
          user={user}
          setShowEmergency={setShowEmergency}
          setSearchTerm={setSearchTerm}
          setShowOpen={setShowOpen}
        ></TicketFilterBar>
        <article className="tickets">
          {displayedTickets.map((ticket) => {
            return <Ticket ticket={ticket} key={ticket.id} user={user} getAndSetTickets={getAndSetTickets}></Ticket>;
          })}
        </article>
      </div>
    </>
  );
};
