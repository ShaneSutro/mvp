import React from 'react';

var Letters = (props) => {
  console.log(props)
  return (
    <div>
      <label htmlFor={props.item}>{props.item}</label>
      <input checked={props.lettersKnown[props.item]} onChange={props.checkbox} type="checkbox" id={props.item}></input>
    </div>
  )
}

export default Letters;