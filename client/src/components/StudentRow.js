import React from 'react';

var StudentRow = (props) => {
  return (
    <button onClick={props.clickHandler} >{props.student.firstName} {props.student.lastName}</button>
  )
}

export default StudentRow;