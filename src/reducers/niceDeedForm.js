const initialState = {
  heading: "",
  when: "",
  what: "",
  who: "",
  whoUser: ""
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_NICEDEED_FORM":
      const returnVal = {
        ...state,
        [action.formData.name]: action.formData.value
      }
      return returnVal
    case "RESET_NEW_NICEDEED_FORM":
      return initialState
    case "SET_NICEDEED_FORM_DATA_FOR_EDIT":
      return action.niceDeedFormData
    default:
      return state
  }
}
