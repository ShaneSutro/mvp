import React from 'react';

var Letters = (props) => {
  return (
    <div>
      <label htmlFor={props.item}>{props.item}</label>
      <input onChange={props.checkbox} type="checkbox" id={props.item}></input>
    </div>
  )
}

export default Letters;