import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import roomsReducer from './reducers/roomsReducer'
import usersReducer from './reducers/usersReducer'


const reducer = combineReducers({

  usersReducer,
  roomsReducer,
  currentUserReducer
})




const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))


export default store
