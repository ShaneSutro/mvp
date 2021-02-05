import React from 'react'
import ActionItem from './ActionItem'

var Actions = (props) => {
  return (
    <div className="actions">
      {props.actions.map(actionName => {
        return <ActionItem key={actionName} name={actionName} action={props.clickHandlers[actionName]} />
      })}
    </div>
  )
}

export default Actions;