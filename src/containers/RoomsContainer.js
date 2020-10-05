import React from 'react'
import {connect} from 'react-redux'
import Room from '../components/Room'
import Rooms from '../components/Rooms'
import NewRoomFormWrapper from '../components/NewRoomFormWrapper'
import EditRoomFormWrapper from '../components/EditRoomFormWrapper'
import { Route, Switch } from 'react-router-dom'

class RoomsContainer extends React.Component {

  render() {
      return (
        <div>
        <Switch>

        <Route exact path="/rooms/:id" render={(routerProps)=> <Room {...routerProps} rooms={this.props.rooms}/>}/>
        <Route exact path='/rooms' component = {NewRoomFormWrapper} />
        <Route exact path="/rooms/:id/edit" render={(rProps)=> <EditRoomFormWrapper {...rProps} rooms={this.props.rooms}/>}/>
        <Route exact path='/rooms' component = {Rooms} />
        </Switch>
      </div>
    )
  }
}


const mapStateToProps = state => {
  // console.log("RoomsContainer state:", state.roomsReducer)
  return {
    rooms: state.roomsReducer,
    currentUser: state.currentUser

  }
}








export default connect(mapStateToProps)(RoomsContainer)
