// synchronous action creators
export const setMyMilestones = milestones => {
  return {
    type: "SET_MY_MILESTONES",
    milestones
  }
}

// asynchronous action creators
export const getMyMilestones = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/milestones", {
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
        console.log(response.data)
        dispatch(setMyMilestones(response.data))
      }
    })
    .catch(console.log)
  }
}
