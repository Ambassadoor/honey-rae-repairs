import { useState, useEffect, type JSX } from "react";
import { getStaffUsers } from "../../services/userService.js";
import { User}  from "../users/User.jsx";
import { Link } from "react-router-dom";
import "./Employees.css"
import { type UserType } from "../../services/employeeService.js";

export const EmployeeList = (): JSX.Element => {
    const [staff, setStaff] = useState<UserType[]>([])
    
    useEffect(() => {
        getStaffUsers().then(res => setStaff(res))
    }, [])

    return (
        <>
            <div className="employees-container">
                <h2>Employees</h2>
            <article className="employees">
            {staff.map(s => <Link to={`/employees/${s.id}`} key={s.id}><User user={s}></User></Link>)}
            </article>
            </div>
        </>
    )
}
