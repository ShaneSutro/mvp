import React from 'react';

var StudentRow = (props) => {
  console.log(props)
  return (
    <button className="student-row" id={props.id} onClick={props.clickHandler} >{props.student.firstName} {props.student.lastName}: {props.student.lettersKnown} of 26 letters known</button>
  )
}

export default StudentRow;