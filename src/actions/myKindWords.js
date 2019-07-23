import { resetKindWordForm } from './kindWordForm'
// synchronous action creators
export const setMyKindWords = kindWords => {
  return {
    type: "SET_MY_KINDWORDS",
    kindWords
  }
}

export const clearKindWords = () => {
  return {
    type: "CLEAR_KINDWORDS"
  }
}

export const addKindWord = kindWord => {
  return {
    type: "ADD_KINDWORD",
    kindWord
  }
}


export const updateKindWordSuccess = kindWord => {
  return {
    type: "UPDATE_KINDWORD",
    kindWord
  }
}

export const deleteKindWordSuccess = kindWordId => {
  return {
    type: "DELETE_KINDWORD",
    kindWordId
  }
}

// asynchronous action creators
export const getMyKindWords = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/kind_words", {
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
        dispatch(setMyKindWords(response.data))
      }
    })
    .catch(console.log)
  }
}

export const createKindWord = (kindWordData, history) => {
  return dispatch => {
    const dataToBeSent = {
        heading: kindWordData.heading,
        what: kindWordData.what,
        when: kindWordData.when,
        who: kindWordData.who,
        user_id: kindWordData.userId
    }

    // add to redux store
    // clear form
    // url change
    return fetch("http://localhost:3000/api/v1/kind_words", {
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
        dispatch(addKindWord(resp.data))
        dispatch(resetKindWordForm())
        // history.push(`/kindWords/${resp.data.id}`)
      }
    })
    .then(console.log)
    .catch(console.log)
  }
}

export const updateKindWord = (kindWordData, history) => {
  return dispatch => {
    const dataToBeSent = {
      heading: kindWordData.heading,
      what: kindWordData.what,
      when: kindWordData.when,
      who: kindWordData.who,
      user_id: kindWordData.userId
    }

    return fetch(`http://localhost:3000/api/v1/kind_words/${kindWordData.kindWordId}`, {
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
        dispatch(updateKindWordSuccess(resp.data)) //will update the store
        history.push(`/kindWords/${resp.data.id}`)
      }
    })
    .catch(console.log)
  }
}

export const deleteKindWord = (kindWordId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/kind_words/${kindWordId}`, {
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
        dispatch(deleteKindWordSuccess(kindWordId))
        history.push(`/kindWords/`)
      }
    })
    .catch(console.log)
  }
    }
