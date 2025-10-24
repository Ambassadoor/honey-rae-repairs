import { useEffect, useState } from "react"
import { getCustomerById } from "../../services/userService.js"
import "./Customers.css"
import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
    const [customer, setCustomer] = useState({})
    const {id} = useParams()

    useEffect(() => {
        getCustomerById(id).then(ref => setCustomer(ref))
    }, [])

    return (
        <> 
            {customer.id ?        
            <section className="customer">
                <header className="customer-header">
                    {customer.fullName}
                </header>
                <div>
                    <span className="customer-info">Email : </span>{customer.email}
                </div>
                <div>
                    <span className="customer-info">Address: </span>{customer.customers[0].address}
                </div>
                <div>
                    <span className="customer-info">Phone Number : </span>{customer.customers[0].phoneNumber}
                </div>
            </section> : ""}
        </>
        )


}