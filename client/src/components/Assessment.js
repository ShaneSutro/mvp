import React from 'react';
import Letters from './Letters'

var Assessment = (props) => {
  return (
    <div>
      <h2>{props.currentStudent.name}</h2>
      <div className="assessments">
        {props.currentStudent.items.map(item => {
          return <Letters item={item.item} key={item.id} checkbox={props.checkbox} lettersKnown={props.currentStudent.lettersKnown} />
        })}
      </div>
    </div>
  )
}

export default Assessment;