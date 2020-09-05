import React from 'react'

import { NavLink, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'


const Room = (props) => {

  let room = props.rooms.rooms && props.rooms.rooms.filter(room => room.id === parseInt(props.match.params.id))[0]


  return (

    <div>
    <h3> {room ? room.room_name : null} </h3>
    </div>
  )

}





export default withRouter(null, connect(Room));
