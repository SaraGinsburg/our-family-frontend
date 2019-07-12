export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_MILESTONES":
      return action.milestones
    case "UPDATE_MILESTONE":
      return state.map(milestone => milestone.id === action.milestone.id ? action.milestone : milestone)
    case "ADD_MILESTONE":
      console.log("action in myMilestones reducer:", action)
      return state.concat(action.milestone)
    default:
      return state
  }
}
