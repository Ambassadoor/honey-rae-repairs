export const getAllEmployees = () => {
  return fetch("http://localhost:8088/employees?_expand=user").then((res) =>
    res.json(),
  );
};


export const getEmployeeById = (id) => {
    return fetch(`http://localhost:8088/employees?userId=${id}&_expand=user&_embed=employeeTickets`).then(res => res.json())
}

export const updateProfile = (profile) => {
  console.log(profile)
  return fetch(`http://localhost:8088/employees/${profile.id}`, {
    method: "PUT",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(profile)
  })
}