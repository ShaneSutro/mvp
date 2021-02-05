import React from 'react';

var ActionItem = (props) => {
  console.log(props.action)
  return (
    <button onClick={props.action} >{props.name}</button>
  )
}

export default ActionItem;
