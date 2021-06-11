import React, { Component } from 'react';
import { PageTitle } from '../page-tittle/PageTitle';
import { connect } from 'react-redux';
class ClassComponentLifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log('(1. Mounting) constructor');

    this.state = {
      counter: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('(2. Mounting) (5. Updating) getDerivedStateFromProps');
    // console.log('props', props);
    // console.log('state', state);
    if (state.counter > 9) {
      return { ...state, counter: 9 };
    }
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('(6. Updating) shouldComponentUpdate');
    // console.log('nextProps', nextProps)
    // console.log('nextState', nextState)

    return nextState.counter < 10 && nextState.counter > -10;
  }

  inc = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  dec = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    console.log('(3. Mounting) (7. Updating) render');
    return (
      <div>
        <PageTitle title='Class Component LifeCycle' />

        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>Counter : {this.state.counter} </p>
          <button onClick={this.inc}>Increment</button>
          <button onClick={this.dec}>Decrement</button>
          <p>{this.props.testRedux}</p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log('(4. Mounting) componentDidMount');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('(8. Updating) getSnapshotBeforeUpdate');
    return 'set value for snapshot or return null';
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`(9. Updating) componentDidUpdate `);
    // console.log('prevProps', prevProps)
    // console.log('prevState', prevState, this.state)
    // console.log('snapshot', snapshot)
  }

  componentWillUnmount() {
    console.log('(10. Unmounting) componentWillUnmount');
  }
}

const mapStateToProps = (state) => {
  return {
    testRedux: state.test,
  };
};
export default connect(mapStateToProps)(ClassComponentLifeCycle);
