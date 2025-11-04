import { useEffect, useState, type JSX } from "react";
import { getAllTickets, type ServiceTicket } from "../../services/ticketService.js";
import "./Ticket.css";
import { Ticket } from "./Ticket.jsx";
import { TicketFilterBar } from "./TicketFilterBar.jsx";
import type { User } from "../../services/employeeService.js";

interface TicketListProps {
  user: User
}

export const TicketList = ({user}: TicketListProps): JSX.Element => {
  const [allTickets, setAllTickets] = useState<ServiceTicket[]>([]);
  const [showEmergency, setShowEmergency] = useState<boolean>(false);
  const [displayedTickets, setDisplayedTickets] = useState<ServiceTicket[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showOpen, setShowOpen] = useState<boolean>(false);

  const getAndSetTickets = (): void => {
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
