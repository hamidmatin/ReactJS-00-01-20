import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageTitle } from '../page-tittle/PageTitle';
import * as actionTypes from '../../redux/actiontypes'
class ReduxCC extends Component {
  render() {
    return (
      <div>
        <PageTitle title='Test Redux Class Component' />
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>Sample Redux : {this.props.testRedux} </p>
          <button onClick={this.props.testAction}>Change</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('IN COMPONENT', state);

  return {
    testRedux: state.test,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    testAction: () => {
      // dispatch(ACTION)
      dispatch({
        type: actionTypes.TEST_CC,
        payload: 'Change by Class Component',
      });
    },
  };
};

export default connect(mapStateToProps, mapActionToProps)(ReduxCC);
