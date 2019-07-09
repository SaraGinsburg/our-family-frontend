export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_MILESTONES":
      return action.milestones
    case "UPDATE_MILESTONE":
      return action.milestone
    default:
      return state
  }
}
