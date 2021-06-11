import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { v4 as uuidGenerator } from 'uuid';
import { NEW_POST } from '../../redux/actiontypes';

import { PageTitle } from '../page-tittle/PageTitle';
import PostForm from './PostForm';

class NewPost extends Component {
  post = {
    id: uuidGenerator(),
    title: '',
    body: '',
  };

  newPostHandler = (newPost) => {
    console.log(newPost);
    this.props.addNewPost(newPost);

    this.props.history.push('/posts')
  };
  render() {
    return (
      <div>
        <PageTitle title='New Post' />
        <PostForm post={this.post} onSubmitHandler={this.newPostHandler} />
      </div>
    );
  }
}

const mapActionToProps = (dispatch) => {
  return {
    addNewPost: (post) => {
      dispatch({
        type: NEW_POST,
        payload: { post },
      });
    },
  };
};

export default connect(null, mapActionToProps)(NewPost);
