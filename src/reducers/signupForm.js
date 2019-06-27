const initialState = {
  first_name: "",
  last_name:  "",
  birthdate: "",
  picture: "",
  points_earned:  0,
  parent_id: 1,
  username: "",
  password:""
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_SIGNUP_FORM":
      return action.formData
    case "RESET_SIGNUP_FORM":
      return initialState
    default:
      return state
  }
}
