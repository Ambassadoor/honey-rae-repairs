import { useEffect, useState } from "react";
import { CustomerViews } from "./CustomerViews.jsx";
import { EmployeeViews } from "./EmployeeViews.jsx";


export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("honey_user")))
  }, [])

  return currentUser.isStaff ? <EmployeeViews currentUser={currentUser}/> : <CustomerViews currentUser={currentUser}/>
}
