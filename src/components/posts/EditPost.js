import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EDIT_POST } from '../../redux/actiontypes';
import { PageTitle } from '../page-tittle/PageTitle';
import PostForm from './PostForm';

class EditPost extends Component {
  constructor() {
    super();
    this.state = {
      post: {
        id: '',
        title: '',
        body: '',
      },
    };
  }

  componentDidMount() {
    // console.log(this.props)
    // console.log(this.props.match)
    // console.log(this.props.match.params)

    const id = this.props.match.params.id;

    const findedPost = this.props.posts.find((p) => p.id.toString() === id);

    console.log(findedPost);

    this.setState({ post: findedPost });
  }

  editPostHandler = (newPost) => {
    console.log(newPost);
    this.props.editPost(newPost);

    this.props.history.push('/posts')
  };
  render() {
    console.log('dd',this.state.post)
    return (
      <div>
        <PageTitle title='ویرایش‌پست ' />
        <PostForm
          post={this.state.post}
          onSubmitHandler={this.editPostHandler}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
const mapActionToProps = (dispatch) => {
  return {
    editPost: (post) => {
      dispatch({
        type: EDIT_POST,
        payload: { post },
      });
    },
  };
};
export default connect(mapStateToProps, mapActionToProps)(EditPost);
