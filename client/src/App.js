import React from 'react'
import Actions from './components/Actions'
import Assessments from './components/Assessment'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStudent: 'Select a student',
      actions: ['action1', 'action2', 'action3'],
      assessmentItems: ['a', 'b', 'c', 'd']
    }
  }

  render() {
    return (
    <div>
      <div className="title">
        <h1>Data Tracker: Alphabet Identification</h1>
      </div>
      <div>
          <Actions actions={this.state.actions}/>
      </div>
        <div>
          <Assessments currentStudent={{ name: this.state.selectedStudent, items: this.state.assessmentItems }}/>
      </div>
    </div>
    )
  }
}

export default App;
