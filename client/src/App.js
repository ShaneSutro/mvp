import React from 'react'
// import {hot} from "react-hot-loader";
import test from './test'

var App = (props) => {
  return(
  <div className="App">
    <h1>Data Tracker: Alphabet Identification</h1>
    <h3>Tests and More!</h3>
    <button onClick={test.get()}>Click Me</button>
  </div>
  )
}

// export default hot(module)(App);
export default App;