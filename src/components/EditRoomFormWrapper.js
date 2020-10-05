import React from 'react';

import RoomInput from '../components/RoomInput'
import { setRoomFormDataForEdit, resetRoomForm } from '../actions/editRoom'
import { editRoom } from '../actions/addRoom'
import {connect} from 'react-redux'

class EditRoomFormWrapper extends React.Component {


  componentDidMount() {
    this.props.rooms.roomss && this.props.setRoomFormDataForEdit(this.props.rooms.rooms.filter(room => room.id === parseInt(this.props.match.params.id))[0])

  }

  componentDidUpdate(prevProps) {
    this.props.rooms.rooms && !prevProps.rooms.rooms && this.props.setRoomFormDataForEdit(this.props.rooms.rooms.filter(room => room.id === parseInt(this.props.match.params.id))[0])
  }

  componentWillUnmount(){
    this.props.resetRoomForm()
  }

  handleSubmit = (roomFormData) => {
     const { editRoom, roomNumber = parseInt(this.props.match.params.id), history } = this.props

      editRoom({
        ...roomFormData,
        roomId: roomNumber
      }, history)
  }

  render() {
    return <>
      <RoomInput editMode handleSubmit={this.handleSubmit} />
      <br/>
      </>
    }
}

export default connect(null, {editRoom, setRoomFormDataForEdit, resetRoomForm})(EditRoomFormWrapper)
