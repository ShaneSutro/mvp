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
      selectedStudentObject: {},
      actions: ['Add Student', 'Save Assessment', 'Cancel'],
      assessments: [],
      allStudents: [{ id: 'someid', firstName: 'Bill', lastName: 'Stickers', grade: 'K', lettersKnown: 0 }],
      lettersKnown: {},
      newStudent: '',
      unsavedChanges: false
    }
  }

  checkbox(e) {
    this.setState({ unsavedChanges: true })
    var newState = { ...this.state.lettersKnown };
    newState[e.target.id] = e.target.checked;
    this.setState({lettersKnown: newState})
  }

  selectStudent(e) {
    if (this.state.unsavedChanges) {
      alert('You have unsaved changes! Please save before choosing a new name.')
      return
    }
    console.log(this.state.allStudents[e.target.id].letters)
    var incomingLetters = this.state.allStudents[e.target.id].letters
    this.setState({ lettersKnown: incomingLetters, unsavedChanges: false })
    this.setState({ selectedStudent: e.target.innerText, selectedStudentObject: this.state.allStudents[e.target.id]})
  }

  saveStudent(event) {
    if (this.state.newStudent === '') { return; }
    var letters = { ...this.state.lettersKnown }
    for (var key in letters) {
      letters[key] = false
    }
    var student = { grade: 'K', lettersKnown: 0, letters }
    var name = this.state.newStudent.split(' ');
    student.firstName = name[0];
    student.lastName = name[1];
    studentController.create(student)
      .then(response => {
        if (response.status !== 201) {
          throw err
        } else if (response.status === 201) {
          this.componentDidMount()
        }
      })
      .catch(err => console.log(err))
  }

  saveAssessment(event) {
    console.log('Saving assessment')
    var student = { ...this.state.selectedStudentObject }
    student.letters = this.state.lettersKnown;
    assessmentController.saveAssessment(student)
      .then(data => console.log(data))
  }

  studentNameDidChange(event) {
    this.setState({newStudent: event.target.value})
  }

  render() {
    return (
    <div>
      <div className="title">
          <h1>Data Tracker: Alphabet Identification</h1>
          <h2>Lowercase</h2>
      </div>
        <div>
          <Actions actions={this.state.actions} clickHandlers={{'Add Student': this.saveStudent.bind(this), 'Save Assessment': this.saveAssessment.bind(this)}} save={this.saveStudent.bind(this)} assessment={this.saveAssessment.bind(this)} />
          <input onChange={this.studentNameDidChange.bind(this)} className="new-student" placeholder="Enter student's name"></input>
      </div>
        <div>
          <Assessments checkbox={this.checkbox.bind(this)} currentStudent={{ name: this.state.selectedStudent, items: this.state.assessments, lettersKnown: this.state.lettersKnown }}/>
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
