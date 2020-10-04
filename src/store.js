import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import roomsReducer from './reducers/roomsReducer'
import usersReducer from './reducers/usersReducer'
import currentUserReducer from './reducers/currentUserReducer'
import signupFormReducer from './reducers/signupFormReducer'
import loginFormReducer from './reducers/loginFormReducer'
import roomFormReducer from './reducers/roomFormReducer'


const reducer = combineReducers({

  usersReducer,
  roomsReducer,
  currentUserReducer,
  signupFormReducer,
  loginFormReducer,
  roomFormReducer
})




const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))


export default store
