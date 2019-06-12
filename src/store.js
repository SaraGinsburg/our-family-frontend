import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import siblingsReducer from './reducers/siblings'
// import siblingFormData from './reduces/siblingFormData'

const reducer = combineReducers({
    siblings: siblingsReducer,
    // siblingFormData
  });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
)

export default store
