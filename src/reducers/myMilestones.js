const initialState = []
export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_MILESTONES":
      return action.milestones
    case "UPDATE_MILESTONE":
      console.log("in update trip action is", action)
      return state.map(milestone => milestone.id === action.milestone.id ? action.milestone : milestone)
    case "ADD_MILESTONE":
      return state.concat(action.milestone)
    case "DELETE_MILESTONE":
      return state.filter(milestone => milestone.id === action.milestoneId ? false : true)
    case "CLEAR_MILESTONES":
      return initialState
    default:
      return state
  }
}
