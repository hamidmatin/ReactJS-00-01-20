import React, { Component } from 'react';
import Student from './Student';

export default class Students extends Component {
  constructor(){
    super();
    this.state = {
      studentList :[
        {
          firstName:'Hamid Reza',
          lastName: 'Izadi Matin',
          soundStatus: 'm'
        },
        {
          firstName:'Aysan',
          lastName: 'Kahbasi',
          soundStatus: 's'
        },
        {
          firstName:'Amir',
          lastName: 'Ershadian',
          soundStatus: 's'
        },
      ]
    }
  }
  render() {
    return (
      <div>
        <Student
          firstName={this.state.studentList[0].firstName}
          lastName={this.state.studentList[0].lastName}
          soundStatus={this.state.studentList[0].soundStatus}
        />
        
        <Student
          firstName={this.state.studentList[1].firstName}
          lastName={this.state.studentList[1].lastName}
          soundStatus={this.state.studentList[1].soundStatus}
        />
        <Student
          firstName={this.state.studentList[2].firstName}
          lastName={this.state.studentList[2].lastName}
          soundStatus={this.state.studentList[2].soundStatus}
        />
        
      </div>
    );
  }
}
