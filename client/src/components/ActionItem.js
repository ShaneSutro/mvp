import React from 'react';

var ActionItem = (props) => {
  return (
    <button onClick={props.action} >{props.name}</button>
  )
}

export default ActionItem;
