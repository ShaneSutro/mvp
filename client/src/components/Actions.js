import React from 'react'
import ActionItem from './ActionItem'

var Actions = (props) => {
  return (
    <div className="actions">
      {props.actions.map(action => {
        return <ActionItem key={action} name={action} />
      })}
    </div>
  )
}

export default Actions;