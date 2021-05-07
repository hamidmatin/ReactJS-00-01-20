import React, { Component } from 'react';
import Student from './Student';

export default class Students extends Component {
  constructor() {
    super();
    this.state = {
      studentList: [
        {
          firstName: 'Hamid Reza',
          lastName: 'Izadi Matin',
          soundStatus: 'm',
        },
        {
          firstName: 'Aysan',
          lastName: 'Kahbasi',
          soundStatus: 's',
        },
        {
          firstName: 'Amir',
          lastName: 'Ershadian',
          soundStatus: 's',
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.studentList.map((student, index) => (
          <Student key={index}
                   firstName={student.firstName}
                   lastName={student.lastName}
                   soundStatus={student.soundStatus}/>
        ))}
      </div>
    );
  }
}
