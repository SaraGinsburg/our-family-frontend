const initialState = {
  when: "",
  what: "",
  picture: "",
  heading: "",
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_MILESTONE_FORM":
      const returnVal =  {
        ...state,
        [action.formData.name]: action.formData.value
      }
      return returnVal
    case "RESET_NEW_MILESTONE_FORM":
      return initialState
    default:
      return state      
  }
}
