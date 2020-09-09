import React from 'react';
import Home from './components/Home'
import './App.css';
import RoomsContainer from './containers/RoomsContainer'
import {fetchRooms} from './actions/fetchRooms'
import { connect } from 'react-redux'
import { Route, Redirect, NavLink, Switch } from 'react-router-dom'
import './style.css';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchRooms()
  }


  render () {

    return(
      <div className="navmenu">

      <button><NavLink exactclassname="current" to="/home">Home</NavLink></button>
      <br/><br/>
      <button><NavLink exactclassname="current" to="/signup">Register</NavLink></button> 
      <button><NavLink exactclassname="current" to="/login">Login</NavLink></button>
      <Switch>

      <Route exact path = '/home' render = {() => <Home home = {this.props.rooms}/>}/>
      <Route exact path = '/' render = {()=> <Redirect to='/home'/>}/>

      </Switch>

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
