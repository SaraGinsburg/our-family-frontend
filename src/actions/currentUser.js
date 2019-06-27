import { resetLoginForm } from './loginForm'
import { resetSignupForm } from './signupForm'
import { getMyMilestones } from './myMilestones'

// synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

// asynchronous action creators
  export const login = credentials => {
    console.log("credentials are", credentials)
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/login", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data))
            dispatch(getMyMilestones())
            dispatch(resetLoginForm())

          }
        })
        .catch(console.log)
    }
  }


export const signup = credentials => {
    console.log("credentials are", credentials)
    const userData = {user: credentials}
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/signup", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })
        .then(r => r.json())
        .then(response => {
          console.log("in signup", response)
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data))
            dispatch(getMyMilestones())
            dispatch(resetSignupForm())

          }
        })
        .catch(r => console.log("in catch", r))
    }
  }

  export const logout = () => {
    return dispatch => {
      dispatch(clearCurrentUser())
      return fetch('http://localhost:3000/api/v1/logout', {
        credentials: "include",
        method: "DELETE"
      })
    }
  }

  export const getCurrentUser = () => {
    console.log("DISPATCHING GET CURRENT USER")
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/get_current_user", {
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
          dispatch(setCurrentUser(response.data))
          dispatch(getMyMilestones())

        }
      })
      .catch(console.log)
    }
  }
