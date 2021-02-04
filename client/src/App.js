import React from 'react'
import Actions from './components/Actions'
import Assessments from './components/Assessment'
import Students from './components/Students'
import studentController from './controller/students'
import assessmentController from './controller/assessments'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStudent: 'Select a student',
      actions: ['Add Student', 'Save Assessment', 'Cancel'],
      assessmentItems: ['a', 'b', 'c', 'd'],
      assessments: [],
      allStudents: [{id: 'someid', firstName: 'Bill', lastName: 'Stickers', grade: 'K', lettersKnown: 0}]
    }
  }

  selectStudent(e) {
    this.setState({ selectedStudent: e.target.innerText })
    this.resetAssessment()
  }

  resetAssessment() {
    this.setState({assessmentItems: []})
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
          <Assessments currentStudent={{ name: this.state.selectedStudent, items: this.state.assessments }}/>
        </div>
        <div>
          <Students students={this.state.allStudents} clickHandler={this.selectStudent.bind(this)} />
        </div>
    </div>
    )
  }

  componentDidMount() {
    studentController.getAll()
      .then(data => data.json())
      .then(students => {
      this.setState({allStudents: students})
      })

    assessmentController.getAll()
      .then(data => data.json())
      .then(assessments => {
        this.setState({assessments})
      })
  }
}

export default App;
