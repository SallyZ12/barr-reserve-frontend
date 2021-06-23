import React from 'react'
import Container from 'react-bootstrap/Container'
import { NavLink, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import Button from 'react-bootstrap/Button';
import {deleteRoom} from '../actions/deleteRoom'
import ReservationInput from '../components/ReservationInput'
import moment from 'moment'
import Table from 'react-bootstrap/Table'

const Room =(props, {rooms}) => {

  console.log("props", props)

  let room = props.rooms.rooms && props.rooms.rooms.filter(room => room.id === parseInt(props.match.params.id))[0]

  let admin1 = props.currentUser && props.currentUser.admin === "Yes"

  const handleDeleteRoom = (room) => {
  props.deleteRoom(room.id)
  props.history.push("/")
  }

  let todaysDate = new Date()
  let futureRes = room.reservations.filter((futureDate) => (moment(futureDate.date).format('MMMM DD YYYY')) >= moment(todaysDate).format('MMMM DD YYYY'))

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

<Container>
    <ReservationInput currentUser = {props.currentUser} room = {room}/><br/>
<Table striped bordered size="sm">
  <thead>
  <tr>
  <th> Date</th>
  <th> Time </th>
  <th> Apt </th>
  </tr>
  </thead>
  <tbody>
    {sortByDate(futureRes).map((reservation =>   <React.Fragment key={reservation.id}>
  <tr>
  <td>{moment(reservation.date).format('MMM DD YYYY')}</td>
  <td>{reservation.hour}</td>
  <td>{reservation.reservation_user_apt}</td>
  </tr>
  </React.Fragment>
  ))}
  </tbody>
  </Table>
</Container>

{admin1 ? <Button variant="link" onClick={()=> handleDeleteRoom(room)}> Delete Room</Button> : ""}
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
