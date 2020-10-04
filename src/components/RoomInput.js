import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updateRoomForm } from '../actions/editRoom'


const RoomInput = ({ roomFormData, updateRoomForm, history, editMode, handleSubmit}) => {

  const {roomName} = roomFormData
// console.log("clubFormdData", clubFormData)

  const handleClubInfoInputChange = event => {
    const { name, value } = event.target
    const updatedRoomFormInfo = {
    ...roomFormData,
    [name]: value
  }

  updateRoomForm(updatedRoomFormInfo)
}

  return (

        <form onSubmit={event => {
        event.preventDefault()
        handleSubmit(roomFormData)
        }}>

        <h5> New Room/Edit Club </h5>
        <label> Room Name </label>
        <input type='text'
                placeholder='Name'
                value={clubName}
                name = 'clubName'
                onChange={handleClubInfoInputChange}/><br/>

        <input type = "submit" value={editMode ? "Update Room Info" : "New Room" }/>
        </form>
    )}

  const mapStateToProps = state => {

    return {
      roomFormData: state.roomFormReducer
    }
  }

export default withRouter(connect(mapStateToProps, {updateRoomForm})(RoomInput))
