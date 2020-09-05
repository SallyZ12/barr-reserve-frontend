import React from 'react';
import Home from './components/Home'
import './App.css';
import RoomsContainer from './containers/RoomsContainer'
import {fetchRooms} from './actions/fetchRooms'
import { connect } from 'react-redux'
import { Route, Redirect, NavLink, Switch } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchRooms()
  }


  render () {

    return(
      <div>
      <Route exact path = '/home' render = {() => <Home home = {this.props.rooms}/>}/>
      <RoomsContainer/>
      </div>

    )
  }
}

const mapStateToProps = state => {
  // console.log("MSTP-APP:", state.roomsReducer)
  return ({

    rooms: state.roomsReducer
  })
}

export default connect(mapStateToProps, { fetchRooms })(App);
