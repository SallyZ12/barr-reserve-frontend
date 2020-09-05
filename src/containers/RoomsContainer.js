import React from 'react'
import {connect} from 'react-redux'
import Room from '../components/Room'

import { Route, Switch } from 'react-router-dom'

class RoomsContainer extends React.Component {

  render() {
      return (
        <div>
        <Switch>

        <Route exact path="/rooms/:id" render={(routerProps)=> <Room {...routerProps} rooms={this.props.rooms}/>}/>

        </Switch>
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log("RoomsContainer state:", state.roomsReducer)
  return {
    rooms: state.roomsReducer,

  }
}








export default connect(mapStateToProps)(RoomsContainer)
