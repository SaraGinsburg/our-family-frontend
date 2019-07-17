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

export const deleteMilestoneSuccess = milestoneId => {
  return {
    type: "DELETE_MILESTONE",
    milestoneId
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
  return dispatch => {
    const dataToBeSent = {
        heading: milestoneData.heading,
        what: milestoneData.what,
        when: milestoneData.when,
        picture: milestoneData.picture,
        user_id: milestoneData.userId
    }
    // add to redux store
    // clear form
    // url change
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
        console.log("before adding, after create")
        dispatch(addMilestone(resp.data))
        dispatch(resetMilestoneForm())
        history.push(`/milestones/${resp.data.id}`)
      }
    })
    .then(console.log)
    .catch(console.log)
  }
}

export const updateMilestone = (milestoneData, history) => {
  return dispatch => {
    const dataToBeSent = {
      when: milestoneData.when,
      what: milestoneData.what,
      picture: milestoneData.picture,
      heading: milestoneData.heading,
      user_id: milestoneData.userId
    }

    return fetch(`http://localhost:3000/api/v1/milestones/${milestoneData.milestoneId}`, {
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
        dispatch(updateMilestoneSuccess(resp.data)) //will update the store
        dispatch(resetMilestoneForm())
        history.push(`/milestones/${resp.data.id}`)
      }
    })
    .catch(console.log)
  }
}


export const deleteMilestone = (milestoneId, history) => {

  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/milestones/${milestoneId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(deleteMilestoneSuccess(milestoneId))
        history.push(`/milestones/`)
      }
    })
    .catch(console.log)
  }
    }
