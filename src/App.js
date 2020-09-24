import React from 'react';
import Home from './components/Home'
import Login from './components/Login'
import './App.css';
import RoomsContainer from './containers/RoomsContainer'
import UsersContainer from './containers/UsersContainer'
import NavBar from './components/NavBar'
import {fetchRooms} from './actions/fetchRooms'
import {fetchUsers} from './actions/fetchUsers'
import { connect } from 'react-redux'
import { Route, Redirect, NavLink, Switch } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './style.css';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchRooms()
    this.props.fetchUsers()
  }


  render () {

    return(
      <div className="navmenu">

      <Button variant="outline-primary"><NavLink exactclassname="current" to="/home">Home</NavLink></Button>
      <br/><br/>
      <NavBar />
      <br/>
      <Switch>
      <Route exact path = '/home' render = {() => <Home home = {this.props.rooms} />}/>
      <Route exact path = '/' render = {()=> <Redirect to='/home'/>}/>
      <Route exact path="/login" component = {Login} />

      </Switch>

      <RoomsContainer/>
      <UsersContainer/>
      </div>

    )
  }
}

const mapStateToProps = state => {
  console.log("MSTP-APP Users:", state.usersReducer)
  return ({
    rooms: state.roomsReducer,
    users: state.usersReducer
  })
}

export default connect(mapStateToProps, { fetchUsers, fetchRooms })(App);


/*<Button variant="outline-primary"><NavLink exactclassname="current" to="/signup">Register</NavLink></Button>*/
/*<Button variant="outline-primary"><NavLink exactclassname="current" to="/login">Login</NavLink></Button>*/
