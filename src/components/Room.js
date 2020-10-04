import React from 'react'

import { NavLink, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import Button from 'react-bootstrap/Button';
import {deleteRoom} from '../actions/deleteRoom'

const Room =(props, {rooms}) => {

  console.log("props", props)

  let room = props.rooms.rooms && props.rooms.rooms.filter(room => room.id === parseInt(props.match.params.id))[0]

  let admin1 = props.currentUser && props.currentUser.admin === "Yes"

  const handleDeleteRoom = (room) => {
  props.deleteRoom(room.id)
  props.history.push("/")
  }

  return (

    <div>
    <h3> {room ? room.room_name : null} </h3>
    <p> I'm here </p>

    {admin1 ? <Button variant="link" onClick={()=> handleDeleteRoom(room)}> Delete Room</Button> : ""}
    </div>
  )

}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUserReducer
  })
}



export default withRouter(connect(mapStateToProps, {deleteRoom})(Room));


// {room ? room.room_name : null}
