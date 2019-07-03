// synchronous action creators
export const setMyMilestones = milestones => {
  return {
    type: "SET_MY_MILESTONES",
    milestones
  }
}

export const clearMilestones = () => {
  return {
    type: "CLEAR_MILESTONES"
  }
}

export const addMilestone = milestone => {
  return {
    type: "ADD_MILESTONE",
    milestone
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
        console.log("in getMyMilestones", response.data)
        dispatch(setMyMilestones(response.data))
      }
    })
    .catch(console.log)
  }
}

export const createMilestone = milestone => {
  return dispatch => {
    const dataToBeSent = {
      when: milestone.when,
      what: milestone.what,
      picture: milestone.picture,
      heading: milestone.heading,
      user_id: milestone.userId
    }
    return fetch("http://localhost:3000/api/v1/milestones", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToBeSent)
    })
    .then(r => r.json())
    .then(console.log)
    .catch(console.log)
  }
}
