import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerNav } from "../components/nav/CustomerNav.jsx"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { TicketList } from "../components/tickets/TicketList.jsx"

export const CustomerViews = ({currentUser}) => {

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <CustomerNav />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Welcome/>}/>
                <Route
                    path="tickets"
                    element={
                        <TicketList user={currentUser}/>
                    }
                />
            </Route>
        </Routes>
    )
}