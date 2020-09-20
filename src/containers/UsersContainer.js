import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/fetchUsers'
import Users from '../components/Users'
import User from '../components/User'
// import NewSignupFormWrapper from '../components/NewSignupFormWrapper'
// import EditSignupFormWrapper from '../components/EditSignupFormWrapper'
import { Route } from 'react-router-dom'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>

      <Route exact path="/users" render={(routerProps) => <Users {...routerProps} users={this.props.users}/>}/>

      <Route exact path="/users/:id" render={(rProps)=> <User {...rProps} currentUser={this.props.currentUser} users={this.props.users} rooms={this.props.rooms}/>}/>


      </div>

    )
  }
}


const mapStateToProps = state => {
  return {
    users: state.usersReducer,
    rooms: state.roomsReducer,

  }
}


export default connect(mapStateToProps, {fetchUsers})(UsersContainer)


  // <Route exact path="/signup" component = {NewSignupFormWrapper} />
  //   <Route exact path="/users/:id/edit" render={(rProps)=> <EditSignupFormWrapper {...rProps} currentUser={this.props.currentUser} />}/>
  // currentUser: state.currentUserReducer
