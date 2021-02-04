import React from 'react';

var StudentRow = (props) => {
  return (
    <button className="student-row" onClick={props.clickHandler} >{props.student.firstName} {props.student.lastName}</button>
  )
}

export default StudentRow;