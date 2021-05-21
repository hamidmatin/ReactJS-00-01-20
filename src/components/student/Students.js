import React, { Component } from 'react';
import { PageTitle } from '../page-tittle/PageTitle';
import Student from './Student';

export default class Students extends Component {
  constructor() {
    super();
    this.state = {
      studentList: [
        {
          id: 1,
          firstName: 'Hamid Reza',
          lastName: 'Izadi Matin',
          soundStatus: 'm',
        },
        {
          id: 2,
          firstName: 'Aysan',
          lastName: 'Kahbasi',
          soundStatus: 's',
        },
        {
          id: 3,
          firstName: 'Amir',
          lastName: 'Ershadian',
          soundStatus: 's',
        },
      ],
    };
  }

  deleteStudentHandler = (id) => {
    console.log(`Delete index = ${id}`);

    this.setState({
      ...this.state,
      studentList: this.state.studentList.filter(s=>s.id !== id),
    });
  };
  changeStudentName = (id, newFirstName, newLastName) => {
    const studentList = [...this.state.studentList]

    const student = studentList.find(s => s.id === id) 

    student.firstName = newFirstName;
    student.lastName = newLastName;

    this.setState({...this.state, studentList})
   }
  render() {
    return (
      <React.Fragment>
        
        <PageTitle title='Students'/>

        {this.state.studentList.map((student) => (
          <Student
            key={student.id}
            student={student}
            onDeleteStudent={() => {
              this.deleteStudentHandler(student.id);
            }}
            onChangeStudentName={this.changeStudentName}
          />
        ))}
      </React.Fragment>
    );
  }


}
