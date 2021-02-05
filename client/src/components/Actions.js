import React from 'react'
import ActionItem from './ActionItem'

var Actions = (props) => {
  return (
    <div className="actions">
      {props.actions.map(action => {
        var handleClick;
        action === "Add Student" ? handleClick = props.save : handleClick = () => { };
        action === "Save Assessment" ? handleClick = props.assessment : handleClick = () => { };
        return <ActionItem key={action} name={action} action={props.clickHandlers[action]} />
      })}
    </div>
  )
}

export default Actions;