import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService.js"

export const Ticket = ({ticket}) => {
    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState({})

    useEffect(() => {
        //setEmployees(getAllEmployees())
        getAllEmployees().then(res => setEmployees(res))
    }, [])

    useEffect(() => {
        setAssignedEmployee(employees.find(employee => employee.id === ticket.employeeTickets[0]?.employeeId))
    }, [employees])
    
    return (
        <section className="ticket">
        <header className="ticket-info">#{ticket.id}</header>
        <div>{ticket.description}</div>
        <footer>
            <div>
                <div className="ticket-info">assignee</div>
                <div>{assignedEmployee ? assignedEmployee.user?.fullName : "None"}</div>
            </div>
            <div>
            <div className="ticket-info">emergency</div>
            <div>{ticket.emergency ? "yes" : "no"}</div>
            </div>
        </footer>
        </section>
)
}