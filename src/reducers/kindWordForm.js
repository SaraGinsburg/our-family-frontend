const initialState = {
  heading: "",
  when: "",
  what: "",
  who: ""
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_KINDWORD_FORM":
      const returnVal = {
        ...state,
        [action.formData.name]: action.formData.value
      }
      return returnVal
    case "RESET_NEW_KINDWORD_FORM":
      return initialState
    case "SET_KINDWORD_FORM_DATA_FOR_EDIT":
      return action.kindWordFormData
    default:
      return state
  }
}
