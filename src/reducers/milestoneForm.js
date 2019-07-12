const initialState = {
  heading: "",
  when: "",
  what: "",
  picture: ""
}

export default (state=initialState, action) => {
  console.log("the incoming action is", action)
  switch (action.type) {
    case "UPDATE_NEW_MILESTONE_FORM":
      const returnVal =  {
        ...state,
        [action.formData.name]: action.formData.value
      }
      console.log("returnVal is", returnVal)
      return returnVal
    case "RESET_NEW_MILESTONE_FORM":
      return initialState
    case "SET_FORM_DATA_FOR_EDIT":
      return action.milestoneFormData
    default:
      return state
  }
}
