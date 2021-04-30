import React from 'react'
import logo from './logo.svg';
import './App.css';

/***** Import Module ****/
// import Course from './react-modules/my-module'

/* میتوانید نام ماجول های پیش فرض را تغییر دهید */
// import ReactCourse from './react-modules/my-module'
// import {myFucntion, session_number} from './react-modules/my-module'

/* ایمپورت همزمان */
// import ReactCourse, {myFucntion, session_number} from './react-modules/my-module'

/* تغییر نام */
import ReactCourse, {myFucntion as myFN, session_number as sNum} from './react-modules/my-module'

// import {MY_PROJECT_NAME, SESSION_COUNT, START_DATE} from './react-modules/my_constant'
import * as project_const from './react-modules/my_constant'

class App extends React.Component{
  render(){
    const myCourse = new ReactCourse();

    // myFucntion()
    myFN()

    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>{myCourse.showInfo()}</p>
          <p>Session : {sNum}</p>
          <p>{project_const.MY_PROJECT_NAME}, {project_const.START_DATE}, {project_const.SESSION_COUNT}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App;
