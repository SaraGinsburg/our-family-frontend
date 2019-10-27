const initialState = []
export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_NICEDEEDS":
      return action.niceDeeds
    case "UPDATE_NICEDEED":
      return state.map(niceDeed => niceDeed.id === action.niceDeed.id ? action.niceDeed : niceDeed)
    case "ADD_NICEDEED":
      return state.concat(action.niceDeed)
    case "DELETE_NICEDEED":
      return state.filter(niceDeed => niceDeed.id === action.niceDeedId ? false : true)
    case "CLEAR_NICEDEEDS":
      return initialState
    default:
      return state
  }
}
