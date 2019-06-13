export default (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_SIBLING":
      return action.sibling
    default:
      return state
  }
}
