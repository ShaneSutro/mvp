import React from 'react'
import Actions from './components/Actions'
import Assessments from './components/Assessment'
import Students from './components/Students'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStudent: 'Select a student',
      actions: ['action1', 'action2', 'action3'],
      assessmentItems: ['a', 'b', 'c', 'd'],
      allStudents: [{id: 'someid', firstName: 'Bill', lastName: 'Stickers', grade: 'K', lettersKnown: 0}]
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
        <div>
          <Students students={this.state.allStudents} />
        </div>
    </div>
    )
  }
}

export default App;
