import React from 'react';

import RoomInput from '../components/RoomInput'
import { addRoom } from '../actions/addRoom'
import { connect } from 'react-redux'

const NewRoomFormWrapper = ( {history, addRoom }) => {

  const handleSubmit = (roomData, roomId) => {
    console.log("roomData", roomData)
      addRoom({
       ...roomData,
       roomId
    }, history)
  }

  return <RoomInput history= {history} handleSubmit={handleSubmit} />
}

export default connect(null,  { addRoom })(NewRoomFormWrapper)
