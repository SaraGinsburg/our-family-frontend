export default (state = {users: []}, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {users: action.users}
    default:
      return state
  }
}
