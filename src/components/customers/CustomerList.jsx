import { useState, useEffect } from "react"
import { getNonStaffUsers } from "../../services/userService.js"
import { User } from "../users/User.jsx"
import "./Customers.css"


export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(res => setCustomers(res))
    })


    return (
        <div className="customers">
            {customers.map(customer => <User user={customer} key={customer.id}></User>)}
        </div>
    )
}