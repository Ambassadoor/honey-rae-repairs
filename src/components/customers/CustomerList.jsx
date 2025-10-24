import { useState, useEffect } from "react"
import { getNonStaffUsers } from "../../services/userService.js"
import { User } from "../users/User.jsx"
import "./Customers.css"
import { Link } from "react-router-dom"


export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(res => setCustomers(res))
    }, [])


    return (
        <>
            <div className="customers-container">
                <h2>Customers</h2>
                <article className="customers">
                    {customers.map(customer => <Link to={`/customers/${customer.id}`} key={customer.id}><User user={customer} ></User></Link>)}
                </article>
            </div>
        </>
    )
}