import React from 'react';
import StudentRow from './StudentRow';

var Students = (props) => {
  return (
    <div>
      <h2>Choose a student name below to begin assessing</h2>
      <div className="all-students">
        {props.students.map(student => {
          return <StudentRow student={student} key={student._id} clickHandler={props.clickHandler} />
        })}
      </div>
    </div>
  )
};

export default Students;