import React from 'react'

import { NavLink, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'


const Room =(props, {rooms}) => {

  console.log("props", props)

  let room = props.rooms.rooms && props.rooms.rooms.filter(room => room.id === parseInt(props.match.params.id))[0]


  return (

    <div>
    <h3> {room.room_name} </h3>
    <p> I'm here </p>
    </div>
  )

}





export default withRouter(connect()(Room));


// {room ? room.room_name : null}
