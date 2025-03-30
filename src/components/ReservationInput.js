import React from 'react'
import{connect} from 'react-redux'
import dayjs from 'dayjs'
import {addReservation} from '../actions/addReservation'
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Options from '../components/Options'
import {time} from '../data'

class ReservationInput extends React.Component {


constructor() {
  super()

  this.currentDate = new Date()
  this.dayToday = dayjs(this.currentDate).add(0, 'days').format('MMM DD YYYY')
  this.dayOne = dayjs(this.currentDate).add(1, 'days').format('MMM DD YYYY')
  this.dayTwo = dayjs(this.currentDate).add(2, 'days').format('MMM DD YYYY')
  this.dayThree = dayjs(this.currentDate).add(3, 'days').format('MMM DD YYYY')
  this.dayFour = dayjs(this.currentDate).add(4, 'days').format('MMM DD YYYY')
  this.dayFive = dayjs(this.currentDate).add(5, 'days').format('MMM DD YYYY')
  this.daySix = dayjs(this.currentDate).add(6, 'days').format('MMM DD YYYY')
  this.daySeven = dayjs(this.currentDate).add(7, 'days').format('MMM DD YYYY')
  this.dayEight = dayjs(this.currentDate).add(8, 'days').format('MMM DD YYYY')


  this.state = {
    room_id: "",
    date: "",
    hour: "",
    confirmID: ""
  }
}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event)=> {
    event.preventDefault()
    let roomId = this.props.room.id
    let userId = this.props.currentUser && this.props.currentUser.id
    let randomId = Math.floor(Math.random() * 1000000)

    this.props.addReservation({...this.state, room_id: roomId, user_id: userId, confirmID: randomId }, userId, this.props.history)


    this.setState({
      room_id: "",
      date: "",
      hour: "",
      confirmID: ""
    })
  }

  render() {

    // The following modifies dropdown to exclude hours by day previously reserved
    let room = this.props.room

    // reservation objects reserved by day of dropdown (the value = this.state.date)
    let day_room = room.reservations.filter(reservation => dayjs(reservation.date).format('MMM DD YYYY') === this.state.date)
    // an array of strings for hours booked by court by day
    let hour_room = day_room.map(reservation => reservation.hour)
    // new time object that excludes hours already reserved by day
    let new_time = time.filter(time => !hour_room.includes(time.value))


    return (
      <form onSubmit={this.handleSubmit}>
        <label> Select To Book Reservation </label><br/>

        <select
          name = 'date'
          value = {this.state.date}
          onChange = {this.handleChange}>
          <option value = "select"> Day </option>
          <option value = {this.dayToday}> {this.dayToday} </option>
          <option value = {this.dayOne}> {this.dayOne} </option>
          <option value = {this.dayTwo}> {this.dayTwo} </option>
          <option value = {this.dayThree}> {this.dayThree} </option>
          <option value = {this.dayFour}> {this.dayFour} </option>
          <option value = {this.dayFive}> {this.dayFive} </option>
          <option value = {this.daySix}> {this.daySix} </option>
          <option value = {this.daySeven}> {this.daySeven} </option>
          <option value = {this.dayEight}> {this.dayEight} </option>
          </select>

          <br/>

          <select
          name = "hour"
          value = {this.state.hour}
          onChange = {this.handleChange}>
          <Options options = {new_time}/>
          </select>

        <br/><br/>
  <Button variant="primary"><input type="submit" value="Reserve"/></Button>
      </form>

    )
  }
}

export default withRouter(connect(null, {addReservation})(ReservationInput))
