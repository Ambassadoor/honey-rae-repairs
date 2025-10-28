export const getAllTickets = () => {
  return fetch(
    "http://localhost:8088/serviceTickets?_embed=employeeTickets",
  ).then((res) => res.json());
};


export const assignTicket = (employeeTicket) => {
  return fetch("http://localhost:8088/employeeTickets", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    }, 
    body: JSON.stringify(employeeTicket)
  })
}

export const closeTicket = (id) => {
  return fetch(`http://localhost:8088/serviceTickets/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      "dateCompleted" : new Date()
    })
  })
}

export const deleteTicket = (id) => {
  return fetch(`http://localhost:8088/serviceTickets/${id}`, {
    method: "DELETE"
  })
}