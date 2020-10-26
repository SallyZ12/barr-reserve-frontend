import React from 'react'
// import Container from 'react-bootstrap/Container'
import { NavLink, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import Button from 'react-bootstrap/Button';
import {deleteRoom} from '../actions/deleteRoom'
import ReservationInput from '../components/ReservationInput'
import moment from 'moment'

const Room =(props, {rooms}) => {

  // console.log("props", props)

  let room = props.rooms.rooms && props.rooms.rooms.filter(room => room.id === parseInt(props.match.params.id))[0]

  let admin1 = props.currentUser && props.currentUser.admin === "Yes"

  const handleDeleteRoom = (room) => {
  props.deleteRoom(room.id)
  props.history.push("/")
  }

  function sortByDate(data) {

  return data.sort(function(a,b) {
    let dateA = a.date
    let dateB = b.date
      let dateSort = dateB.localeCompare(dateA)
          return dateSort
    })
}

  return (

    <div>

    <h3> {room ? room.room_name : null} </h3>


    <ReservationInput currentUser = {props.currentUser} room = {room}/><br/>

    {sortByDate(room.room_res_date).map((reservation =>   <p key={reservation.id}>
    {moment(reservation.date).format('MMM DD YYYY')} -- {reservation.hour}  {reservation.reservation_user_apt} </p>))}

    {admin1 ? <Button variant="link" onClick={()=> handleDeleteRoom(room)}> Delete Room</Button> : ""}
    <br/>
    {admin1 ? <NavLink to= {`/rooms/${room.id}/edit`}> Edit Room Name </NavLink> : ""}

    </div>
  )

}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUserReducer
  })
}



export default withRouter(connect(mapStateToProps, {deleteRoom})(Room));

// {sortByDate(room.reservations).map((reservation =>   <p key={reservation.id}>
// {room ? room.room_name : null}
