import React from 'react'
import {Link} from 'react-router-dom'


const Rooms = ({rooms}) => {
// console.log("rooms", rooms)

return (

  <div>

  {rooms && rooms.map(room =>
    <p key={room.id}>

    <Link to={`/rooms/${room.id}`}> {room.room_name}  </Link><br/>
    </p>)}
  </div>
  )
}

export default Rooms
