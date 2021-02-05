import React from 'react';

var ActionItem = (props) => {
  return (
    <button onClick={props.save} >{props.name}</button>
  )
}

export default ActionItem;
