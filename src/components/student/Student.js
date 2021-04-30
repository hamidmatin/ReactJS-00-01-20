import React, { Component } from 'react';
import './Student.css';

export default class Student extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.hideStudentByMethod = this.hideStudentByMethod.bind(this);

    this.state = {
      visible: true,
      soundStatus: props.soundStatus,
    };
  }

  hideStudentByMethod() {
    console.log('Hide with Method');
    console.log(this);
    this.setState({ ...this.state, visible: false });
  }

  hideStudentByArrow = () => {
    console.log('Hide with Arrow Function');
    console.log(this.props.firstName);

    // this.state.visible = false;
    this.setState({ ...this.state, visible: false });
  };

  toggleSoundStatusHandler = () => {
    let newStatus = this.state.soundStatus === 'm' ? 's' : 'm';

    this.setState({ ...this.state, soundStatus: newStatus });
  };

  setSoundStatusHandler = (soundStatus) => {
    this.setState({ ...this.state, soundStatus });
  };

  render() {
    return this.state.visible ? (
      <div className='student'>
        <div className='content'>
          <div className='avatar'>
            {this.props.firstName[0]}
            {this.props.lastName[0]}
            <div className='sound-status'>{this.state.soundStatus}</div>
          </div>
          <div className='full-name'>
            {this.props.firstName} {this.props.lastName}
          </div>
        </div>
        <div className='action'>
          <button onClick={this.hideStudentByMethod}>Hide method</button>
          <button onClick={this.hideStudentByArrow}>Hide arrow</button>
          <button onClick={this.toggleSoundStatusHandler}>
            Toggle Sound Status
          </button>
          <button onClick={this.setSoundStatusHandler.bind(this, 'm')}>
            Set to Mic
          </button>
          <button
            onClick={() => {
              this.setSoundStatusHandler('s');
            }}
          >
            Set to Speaker
          </button>
        </div>
      </div>
    ) : null;
  }
}
