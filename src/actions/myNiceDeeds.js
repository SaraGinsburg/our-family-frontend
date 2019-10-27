import { resetNiceDeedForm } from './niceDeedForm'
import { getCurrentUser} from './currentUser'

// synchronous action creators
export const setMyNiceDeeds = niceDeeds => {
  return {
    type: "SET_MY_NICEDEEDS",
    niceDeeds
  }
}

export const clearNiceDeeds = () => {
  return {
    type: "CLEAR_NICEDEEDS"
  }
}

export const addNiceDeed = niceDeed => {
  return {
    type: "ADD_NICEDEED",
    niceDeed
  }
}

export const addNiceDeedPointToReportingUser = niceDeed => {
  return {
    type: "ADD_NICEDEED_TO_REPORTING_USER",
    niceDeed
  }
}


export const updateNiceDeedSuccess = niceDeed => {
  return {
    type: "UPDATE_NICEDEED",
    niceDeed
  }
}

export const deleteNiceDeedSuccess = niceDeedId => {
  return {
    type: "DELETE_NICEDEED",
    niceDeedId
  }
}

// asynchronous action creators
export const getMyNiceDeeds = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/nice_deeds", {
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
        console.log("response.data", response.data)
        dispatch(setMyNiceDeeds(response.data))
      }
    })
    .catch(console.log)
  }
}

export const createNiceDeed = (niceDeedData, history) => {
  return dispatch => {
    const dataToBeSent = {
        heading: niceDeedData.heading,
        what: niceDeedData.what,
        when: niceDeedData.when,
        who: niceDeedData.who,
        user_id: niceDeedData.userId
    }

    // add to redux store
    // clear form
    // url change
    return fetch("http://localhost:3000/api/v1/nice_deeds", {
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
        console.log("resp", resp)
        dispatch(addNiceDeed(resp.data))
        dispatch(getCurrentUser())
        dispatch(resetNiceDeedForm())
        history.push(`/niceDeeds/${resp.data.id}`)
      }
    })
    .then(console.log)
    .catch(console.log)
  }
}

export const updateNiceDeed = (niceDeedData, history) => {
  return dispatch => {
    const dataToBeSent = {
      heading: niceDeedData.heading,
      what: niceDeedData.what,
      when: niceDeedData.when,
      who: niceDeedData.who,
      user_id: niceDeedData.userId
    }

    return fetch(`http://localhost:3000/api/v1/nice_deeds/${niceDeedData.niceDeedId}`, {
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
        dispatch(updateNiceDeedSuccess(resp.data)) //will update the store
        history.push(`/niceDeeds/${resp.data.id}`)
      }
    })
    .catch(console.log)
  }
}

export const deleteNiceDeed = (niceDeedId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/nice_deeds/${niceDeedId}`, {
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
        dispatch(deleteNiceDeedSuccess(niceDeedId))
        dispatch(getCurrentUser())
        history.push(`/niceDeeds/`)
      }
    })
    .catch(console.log)
  }
    }
