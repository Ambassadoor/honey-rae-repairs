import { useEffect, useState, type JSX } from "react"
import "./Form.css"
import { type Employee, getEmployeeById, type UserType } from "../../services/employeeService.js"
import { updateProfile } from "../../services/employeeService.js"
import { useNavigate } from "react-router-dom"

interface EmployeeFormProps {
    user: UserType
}

export const EmployeeForm = ({user}: EmployeeFormProps): JSX.Element => {
    const [profile, setProfile] = useState<Employee>({id: 0, specialty: "", rate: 0,userId: 0})
    const navigate = useNavigate()

    useEffect(() => {
        getEmployeeById(user.id).then(res => setProfile(res[0]))
    }, [user])

    const handleSave = () => {
        profile.id !== 0 && updateProfile({id: profile.id, specialty: profile.specialty, rate: profile.rate, userId: profile.userId}).then(() => {
            navigate(`/employees/${profile.userId}`)
        })
    }
    
    
    return (
        <form className="profile">
            <h2>Update Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty</label>
                    <input 
                        id="specialty"
                        type="text"
                        required
                        className="form-control"
                        value={profile?.specialty ? profile.specialty : ""}
                        onChange={(e) => {
                            setProfile(prev => ({...prev, specialty: e.target.value}))
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="rate">Hourly Rate</label>
                    <input 
                        id="rate"
                        type="number"
                        step={0.01}
                        required
                        className="form-control"
                        value={profile?.rate ? profile.rate : 0}
                        onChange={(e) => {
                            setProfile(prev => ({...prev, rate: Number(e.target.value)}))
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-primary" onClick={(e) => {
                        e.preventDefault()
                        handleSave()}}>Save Profile</button>
                </div>
            </fieldset>
        </form>
    )
}