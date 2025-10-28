import "./Form.css"
import { createTicket } from "../../services/ticketService.js"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const TicketForm = ({user}) => {
    const [ticket, setTicket] = useState({
        userId: null,
        description: "",
        emergency: false,
        dateCompleted: ""
    })

    const navigate = useNavigate()

    const handleSubmit = async () => {
        if (ticket.userId !== null && ticket.description !== "") {
        await createTicket(ticket)
        navigate("/tickets")
        } else {
            window.alert("Please fill out description")
        }
    }

    useEffect(() => {
        setTicket(prev => ({...prev, userId : parseInt(user.id)}))
    }, [user])

    return (
        <form>
            <h2>New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label>Description</label>
                    <input
                        type="text" 
                        className="form-control" 
                        placeholder="Brief description of problem"
                        onChange={(e) => {
                            setTicket(prev => ({...prev, description: e.target.value}))
                        }}
                        ></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>
                        Emergency:
                        <input 
                            type="checkbox"
                            onChange={(e) => {
                                setTicket(prev => ({...prev, emergency: e.target.checked}))
                            }}
                            />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info" onClick={(e) => {
                        e.preventDefault()
                        handleSubmit()}}>Submit Ticket</button>
                </div>
            </fieldset>
        </form>
    )
}