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
      allStudents: [{ id: 'someid', firstName: 'Bill', lastName: 'Stickers', grade: 'K', lettersKnown: 0 }],
      knownLetters: {}
    }
  }

  checkbox(e) {
    var newState = { ...this.state.lettersKnown };
    newState[e.target.id] = e.target.checked;
    console.log(e.target.id)
    this.setState({lettersKnown: newState})
    // this.setState({lettersKnown: {...this.state.lettersKnown, lettersKnown[e.target.id]: e.target.checked}})
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
          <h2>Lowercase</h2>
      </div>
      <div>
          <Actions actions={this.state.actions}/>
      </div>
        <div>
          <Assessments checkbox={this.checkbox.bind(this)} currentStudent={{ name: this.state.selectedStudent, items: this.state.assessments }}/>
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
        var lettersKnown = {}
        for (const item of assessments) {
          lettersKnown[item.item] = false
        }
        this.setState({assessments, lettersKnown})
      })

  }
}

export default App;
