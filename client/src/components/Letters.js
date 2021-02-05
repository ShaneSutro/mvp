import React from 'react';

var Letters = (props) => {
  return (
    <div>
      <input checked={props.lettersKnown[props.item]} onChange={props.checkbox} type="checkbox" id={props.item}></input>
      <label htmlFor={props.item}>{props.item}</label>
    </div>
  )
}

export default Letters;