import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import dayjs from 'dayjs'
import Button from 'react-bootstrap/Button';
import {deleteUser} from '../actions/deleteUser'
import {connect} from 'react-redux'


const User = (props) => {

// let user = props.users.users[props.match.params.id-1](this returns object by index of aray)

// Use following instead, need id not index of array since sort order changes the order
let user = props.users.users && props.users.users.filter(user => user.id === parseInt(props.match.params.id))[0]

// steps to accessing today's date
let date = new Date()
let currentDate = dayjs(date).format('MMM DD YYYY')

// sort by Date
function sortByDate(data) {
  return data.sort(function(a,b) {
    let dateA = a.date
    let dateB = b.date
      let dateSort = dateB.localeCompare(dateA)
          return dateSort
        }
    )
}

let user1 = user ? user.username: null
let currentUser1 = props.currentUser.username
let admin1 = props.currentUser && props.currentUser.admin === "Yes"

const handleDeleteUser = (user) => {
  props.deleteUser(user.id)
  props.history.push("/")
}

  return (
    <Card bg="light"  className="text-left" style={{ width: '45rem'}}>
      {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
      <Card.Body>
        <Card.Title> Today's Date: {currentDate} <br/><br/> Owner Information:</Card.Title>

        <Card.Text>
         <br/>
        Name: {user ? user.first_name : null} {user ? user.last_name : null} <br/>
        Username: {user ? user.username : null} <br/>
        Email: {user ? user.email : null} <br/>
        Apartment: {user ? user.apartment : null} <br/>
        Admin: {user ? user.admin : null} <br/>
        Reservation Count: {user ? user.reservations.length : null}<br/><br/>

        {/*only owner logged in can edit their  information*/}
        { user1 === currentUser1 ? <Link to={`/users/${user.id}/edit`}> Edit Owner Information </Link> : ""}
        <br/>
        { admin1 ? <Button variant="link" onClick={()=> handleDeleteUser(user)}> Delete Owner</Button> : ""}
        <br/><br/>

        Reservations: <br/>
            {/* ternary used so that admin can't access players specific reservation from player's main reservation screen*/}

           {user1 === currentUser1 ?

              user && sortByDate(user.reservations).map(reservation => ( <li key={reservation.id}>
               <Link to={`/reservations/${reservation.id}`} >
               ConfirmID: {reservation.confirmID} - </Link>
               {dayjs(reservation.date).format('MMM DD YYYY')} -
               {reservation.hour} --
              {reservation.reservation_room}
              </li> )) :

             user && sortByDate(user.reservations).map(reservation => (<li key={reservation.id}>
              ConfirmID: {reservation.confirmID} --
              {dayjs(reservation.date).format('MMM DD YYYY')} -
              {reservation.hour} --
              {reservation.reservation_room}
              </li> ))
            }

        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default withRouter(connect(null, {deleteUser})(User));
