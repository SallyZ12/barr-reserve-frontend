export const updateRoomForm = (roomFormData) => {

    return {
      type: "UPDATE_ROOM_FORM",
      roomFormData
    }
  }


  export const resetRoomForm = () => {
    return {
      type: "RESET_ROOM_FORM"
    }
  }


  export const setRoomFormDataForEdit = room => {
    const roomFormData = {
      id: room.id,
      roomName: room.room_name
  }

    return {
      type: "SET_ROOM_FORM_DATA_FOR_EDIT",
      roomFormData
    }
}
