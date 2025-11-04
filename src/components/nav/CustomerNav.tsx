import { Link } from "react-router-dom"
import "./NavBar.css"
import { useNavigate } from "react-router-dom"
import type { JSX } from "react"

export const CustomerNav = (): JSX.Element => {

    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link className="nav-bar-link" to="/tickets">Tickets</Link>
            </li>
            {localStorage.getItem("honey_user") ? (
                <li className="navbar-item navbar-logout">
                    <Link
                        className="navbar-link"
                        to=""
                        onClick={() => {
                            localStorage.removeItem("honey_user")
                            navigate("/", {replace: true})
                        }}
                    >
                        Logout
                    </Link>
                </li>
            ) : (
                ""
            )}
        </ul>
    )
}