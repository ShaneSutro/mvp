import React from 'react';

var StudentRow = (props) => {
  return (
    <button>{props.student.firstName} {props.student.lastName}</button>
  )
}

export default StudentRow;