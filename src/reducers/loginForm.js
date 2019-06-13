const initialState = {
  username: "",
  password: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN_FORM":
      return action.sibling
    default:
      return state
  }
}
