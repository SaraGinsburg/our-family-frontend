export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_MILESTONES":
      return action.milestones

    default:
      return state
  }
}
