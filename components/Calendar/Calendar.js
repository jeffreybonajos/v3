import React, { Component } from "react";
import styled from "styled-components";

class Calendar extends Component {
  daysInMonth = (month, year) => {
    let n = new Date(year, month, 0).getDate();
    alert("Number of days: " + n);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.daysInMonth(12, 2019)}>Click Here</button>
      </div>
    );
  }
}

export default Calendar;
