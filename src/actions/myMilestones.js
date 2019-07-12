import { resetMilestoneForm } from './milestoneForm'
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

export const updateMilestoneSuccess = milestone => {
  return {
    type: "UPDATE_MILESTONE",
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

export const createMilestone = (milestoneData, history) => {

  console.log("milestone in the createMilestone action:" , milestoneData )
  return dispatch => {
    const dataToBeSent = {
      milestone: milestoneData
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
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(addMilestone(resp.data))
        dispatch(resetMilestoneForm())
        history.push(`/milestones/${resp.data.id}`)
      }
    })
    .then(console.log)
    .catch(console.log)
  }
}

export const updateMilestone = (milestone, history) => {
  return dispatch => {
    const dataToBeSent = {
      when: milestone.when,
      what: milestone.what,
      picture: milestone.picture,
      heading: milestone.heading
    }
    return fetch("http://localhost:3000/api/v1/milestones", {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToBeSent)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(updateMilestoneSuccess(resp.data))
        history.push(`/milestones/${resp.data.id}`)
      }
    })
    .catch(console.log)
  }
}
