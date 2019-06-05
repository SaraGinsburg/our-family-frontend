import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import siblingsReducer from './reducers/siblings.js'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    sibling: siblingsReducer
  })

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

  export default store
