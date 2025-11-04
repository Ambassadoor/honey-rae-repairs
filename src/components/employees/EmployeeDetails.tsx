import "./Employees.css"
import { useEffect, useState, type JSX } from "react"
import { useParams } from "react-router-dom"
import { type Employee, getEmployeeById } from "../../services/employeeService.js"

export const EmployeeDetails = (): JSX.Element => {
    const [employee, setEmployee] = useState<Employee>()
    const {id} = useParams()

    useEffect(() => {
        getEmployeeById(Number(id)).then(res => setEmployee(res))
    }, [])

    return (
        <>
            {employee?.userId ?
            <section className="employee">
                <header className="employee-header">
                    {employee.user?.fullName}
                </header>
                <div>
                    <span className="employee-info">Email : </span>{employee.user?.email}
                </div>
                <div>
                    <span className="employee-info">Specialty : </span>{employee.specialty}
                </div>
                <div>
                    <span className="employee-info">Rate : </span>{employee.rate}
                </div>
                <div>Currently working on {employee.employeeTickets?.length} tickets</div>
            </section> : <div>Error retrieving employee info</div>
        }
        </>
    )
}