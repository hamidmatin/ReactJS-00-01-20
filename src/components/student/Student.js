import React, { Component } from 'react';
import './Student.css';

export default class Student extends Component {
  constructor() {
    super();

    // This binding is necessary to make `this` work in the callback
    this.hideStudentByMethod = this.hideStudentByMethod.bind(this);

    this.state = {
      visible: true,
    };
  }

  hideStudentByMethod() {
    console.log('Hide with Method');
    console.log(this);
  }

  hideStudentByArrow = () => {
    console.log('Hide with Arrow Function');
    console.log(this.props.firstName);

    // this.state.visible = false;
    this.setState({visible: false})
  };

  render() {
    return this.state.visible ? (
      <div className='student'>
        <div className='content'>
          <div className='avatar'>
            {this.props.firstName[0]}
            {this.props.lastName[0]}
            <div className='sound-status'>{this.props.soundStatus}</div>
          </div>
          <div className='full-name'>
            {this.props.firstName} {this.props.lastName}
          </div>
        </div>
        <div className='action'>
          <button onClick={this.hideStudentByMethod}>Hide method</button>
          <button onClick={this.hideStudentByArrow}>Hide arrow</button>
        </div>
      </div>
    ) : null;
  }
}
