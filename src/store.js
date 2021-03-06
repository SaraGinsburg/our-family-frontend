import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import usersReducer from './reducers/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import milestoneForm from './reducers/milestoneForm'
import kindWordForm from './reducers/kindWordForm'
import niceDeedForm from './reducers/niceDeedForm'
import myMilestones from './reducers/myMilestones'
import myKindWords from './reducers/myKindWords'
import myNiceDeeds from './reducers/myNiceDeeds'
// import userFormData from './reduces/userFormData'

// displaying different syntax options on (lines 10-11)
const reducer = combineReducers({
    users: usersReducer,
    currentUser,
    loginForm,
    signupForm,
    myMilestones,
    myKindWords,
    myNiceDeeds,
    milestoneForm,
    kindWordForm,
    niceDeedForm
  });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
)

export default store
