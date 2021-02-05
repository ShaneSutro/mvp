import React from 'react'
import ActionItem from './ActionItem'

var Actions = (props) => {
  return (
    <div className="actions">
      {props.actions.map(action => {
        var save;
        action === "Add Student" ? save = props.save : save = () => { }
        return <ActionItem key={action} name={action} save={save} />
      })}
    </div>
  )
}

export default Actions;