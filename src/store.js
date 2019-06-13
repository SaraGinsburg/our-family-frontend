import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import siblingsReducer from './reducers/siblings'
import currentSibling from './reducers/currentSibling'
import loginForm from './reducers/loginForm'
// import siblingFormData from './reduces/siblingFormData'

// displaying different syntax options on (lines 10-11)
const reducer = combineReducers({
    siblings: siblingsReducer,
    currentSibling,
    loginForm
    // siblingFormData
  });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
)

export default store
