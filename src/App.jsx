import { useEffect, useState } from "react"
import { getAllTickets } from "./services/ticketService.js"
import "./App.css"

export const App = () => {
  const [allTickets, setAllTickets] =  useState([])
  const [showEmergency, setShowEmergency] = useState(false)
  const [displayedTickets, setDisplayedTickets] = useState([])

  useEffect(() => {
    getAllTickets().then(tickets => {
      setAllTickets(tickets)
    })
  }, [])

  useEffect(() => {
    setDisplayedTickets(allTickets.filter(ticket => showEmergency ? ticket.emergency : true))
  }, [showEmergency, allTickets])


  return (
    <>
      <div className="tickets-container">
        <h2>Tickets</h2>
        <div>
          <button className="filter-btn btn-primary" onClick={() => {setShowEmergency(true)}}> Emergency</button>
          <button className="filter-btn btn-info" onClick={() => {setShowEmergency(false)}}>Show All</button>
        </div>
        <article className="tickets">
          {displayedTickets.map(ticket => {
            return (
              <section className="ticket" key={ticket.id}>
                <header className="ticket-info">#{ticket.id}</header>
                <div>{ticket.description}</div>
                <footer>
                  <div>
                    <div className="ticket-info">emergency</div>
                    <div>{ticket.emergency ? "yes" : "no"}</div>
                  </div>
                </footer>
              </section>
            )
          })}
        </article>
      </div>
    </>
  )
}
