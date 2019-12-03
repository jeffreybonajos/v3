import React, { Component } from "react";
import styled from "styled-components";

const CalendarContainer = styled.div`
  border: 1px solid black;
  width: 20%;
  position: fixed;
  top: 86px;
  right: 5%;
  background-color: #fff;
`;

const CalendarNav = styled.div`
  text-align: center;
  padding: 10px 0;
`;

const CalendarTimeIn = styled.button`
  padding: 2px 10px;
  border: none;
  background-color: #ffca10;
  color: #fff;
`;

const DayOfMonthContainer = styled.div`
  text-align: center;
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  padding-top: 10px;
`;

const DayOfWeek = styled.div`
  min-width: 14.27%;
  font-weight: 600;
`;

const DayOfMonth = styled.div`
  min-width: 14.27%;
`;

const DayInactive = styled.div`
  min-width: 14.27%;
  color: rgb(180, 179, 179);
`;

const CalendarNavButton = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  outline: none;
`;

const CalendarSwitch = styled.div`
  text-align: center;
`;

export default class index extends Component {
  constructor() {
    super();

    this.state = {
      time: new Date(),
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      daysFilled: [],
      preVacant: 0,
      afterVacant: 0
    };
  }

  componentDidMount() {
    // create the interval once component is mounted
    this.update = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1 * 1000); // every 1 seconds
  }

  componentWillUnmount() {
    // delete the interval just before component is removed
    clearInterval(this.update);
  }

  daysInMonth = (month, year) => {
    let n = new Date(year, month, 0).getDate();
    alert("Number of days: " + n);
  };

  getCurrentDate = () => {
    let today = new Date();
    let day = String(today.getDate()).padStart(2, "0");
    let month = today.getMonth();
    let startDay = today.getDay();
    // let year = today.getFullYear();

    switch (startDay) {
      case 0:
        startDay = "Sun";
        break;
      case 1:
        startDay = "Mon";
        break;
      case 2:
        startDay = "Tue";
        break;
      case 3:
        startDay = "Wed";
        break;
      case 4:
        startDay = "Thu";
        break;
      case 5:
        startDay = "Fri";
        break;
      default:
        startDay = "Sat";
        break;
    }

    switch (month) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
        break;
      case 2:
        month = "Mar";
        break;
      case 3:
        month = "Apr";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "Jun";
        break;
      case 6:
        month = "Jul";
        break;
      case 7:
        month = "Aug";
        break;
      case 8:
        month = "Sep";
        break;
      case 9:
        month = "Oct";
        break;
      case 10:
        month = "Nov";
        break;
      default:
        month = "Dec";
        break;
    }

    return (
      <span>
        {startDay} {day} {month}
      </span>
    );
  };

  checkDay = () => {
    let year = this.state.year;
    let month = this.state.month;
    let days = new Date(year, month, 0).getDate();
    let startDay = new Date(year + "-" + month + "-01").getDay();

    switch (month) {
      case 1:
        month = "January";
        break;
      case 2:
        month = "February";
        break;
      case 3:
        month = "March";
        break;
      case 4:
        month = "April";
        break;
      case 5:
        month = "May";
        break;
      case 6:
        month = "June";
        break;
      case 7:
        month = "July";
        break;
      case 8:
        month = "August";
        break;
      case 9:
        month = "September";
        break;
      case 10:
        month = "October";
        break;
      case 11:
        month = "November";
        break;
      default:
        month = "December";
        break;
    }

    return (
      <span>
        {month} {year}
      </span>
    );
  };

  nextMonth = () => {
    let month = this.state.month;
    let year = this.state.year;
    if (month === 12) {
      this.setState({
        year: year + 1,
        month: 1
      });
    } else {
      this.setState({
        month: month + 1
      });
    }
  };

  previousMonth = () => {
    let month = this.state.month;
    let year = this.state.year;
    if (month === 1) {
      this.setState({
        year: year - 1,
        month: 12
      });
    } else {
      this.setState({
        month: month - 1
      });
    }
  };

  checkTime = i => {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  };

  checkNext = () => {
    let x = 34;
    let y = 7 - (x % 7);

    alert(y);
  };

  mapDaysOfMonth = () => {
    let year = this.state.year;
    let month = this.state.month;
    let days = new Date(year, month, 0).getDate();
    let startDay = new Date(year + "-" + month + "-01").getDay();

    let prevYear = 0;
    let prevMonth = 0;

    if (month === 1) {
      prevMonth = 12;
      prevYear = year - 1;
    } else {
      prevMonth = month - 1;
    }

    let prevDays = new Date(prevYear, prevMonth, 0).getDate() - startDay + 1;

    let items = [];
    let prevCount = 0;
    let day = 1;

    while (prevCount < startDay) {
      items.push(
        <>
          <DayInactive>{prevDays}</DayInactive>
          <br />
        </>
      );
      prevCount++;
      prevDays++;
    }

    while (day <= days) {
      if (day % 7 === 0) {
        items.push(
          <>
            <DayOfMonth>{day}</DayOfMonth>
            <br />
          </>
        );
        day++;
      } else {
        items.push(
          <>
            <DayOfMonth>{day}</DayOfMonth>
          </>
        );
        day++;
      }
    }

    if (items.length % 7 !== 0) {
      let x = 7 - (items.length % 7);

      for (let y = 1; y <= x; y++) {
        items.push(
          <>
            <DayInactive>{y}</DayInactive>
          </>
        );
      }
    }

    return items;
  };

  mapDaysOfWeek = () => {
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days.map(day => <DayOfWeek>{day}</DayOfWeek>);
  };

  render() {
    const { time } = this.state;
    return (
      <CalendarContainer>
        <CalendarNav>
          {this.getCurrentDate()}&emsp;
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          })}
          &emsp;
          <CalendarTimeIn>Time In - 04:00 PM</CalendarTimeIn>
        </CalendarNav>
        <CalendarSwitch>
          <CalendarNavButton
            onClick={this.previousMonth}
            style={{ float: "left" }}
          >
            &lt;
          </CalendarNavButton>
          {this.checkDay()}
          <CalendarNavButton
            onClick={this.nextMonth}
            style={{ float: "right" }}
          >
            &gt;
          </CalendarNavButton>
        </CalendarSwitch>
        <div>
          <DayOfMonthContainer>
            {this.mapDaysOfWeek()}
            {this.mapDaysOfMonth()}
          </DayOfMonthContainer>
        </div>
      </CalendarContainer>
    );
  }
}
