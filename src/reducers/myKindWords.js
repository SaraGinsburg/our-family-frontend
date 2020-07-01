const initialState = []
export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_KINDWORDS":
      return action.kindWords
    case "UPDATE_KINDWORD":
      return state.map(kindWord => kindWord.id === action.kindWord.id ? action.kindWord : kindWord)
    case "ADD_KINDWORD":
      return state.concat(action.kindWord)
    case "DELETE_KINDWORD":
      return state.filter(kindWord => kindWord.id === action.kindWordId ? false : true)
    case "CLEAR_KINDWORDS":
      return initialState
    // case "SET_WHO_USER":
    //   return action.whoId
    default:
      return state
  }
}
