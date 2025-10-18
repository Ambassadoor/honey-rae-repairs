import { useState, useEffect } from "react";
import { getStaffUsers } from "../../services/userService.js";
import { User } from "../users/User.jsx";
import "./Employees.css"

export const EmployeeList = () => {
    const [staff, setStaff] = useState([])
    
    useEffect(() => {
        getStaffUsers().then(res => setStaff(res))
    }, [])

    return (
        <div className="employees">
            {staff.map(s => <User user={s} key={s.id}></User>)}
        </div>
    )
}
