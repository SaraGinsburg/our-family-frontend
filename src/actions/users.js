// synchronous actions
export const setUsers = users => {
  return {
    type: "SET_USERS",
    users
  }
}


// ** async actions
export const getUsers = () => {
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/users', {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        console.log("in getUsers", response.data)
        dispatch(setUsers(response.data))
      }
    })
    .catch(console.log)
  }
}
