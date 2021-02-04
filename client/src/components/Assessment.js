import React from 'react';
import Letters from './Letters'

var Assessment = (props) => {
  return (
    <div className="assessments">
      <h2>{props.currentStudent.name}</h2>
      {props.currentStudent.items.map(item => {
        return <Letters item={item} key={item}/>
      })}
    </div>
  )
}

export default Assessment;