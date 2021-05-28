import React, { Component, Fragment } from 'react';
import NewPanel from '../newPanel/NewPanel';
import { PageTitle } from '../page-tittle/PageTitle';
import PostsList from './PostsList';
import withLoading from '../../HOC/withLoading';
import axios from 'axios';

export default class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      // console.log(response)
      this.setState({ ...this.state, posts: response.data, isLoading: false });
    });
  }

  render() {
    const PostListWithLoading = withLoading(PostsList);
    return (
      <Fragment>
        <PageTitle title='Posts' />

        <NewPanel caption='New Post' to='/posts/new' />

        <PostListWithLoading
          isLoading={this.state.isLoading}
          posts={this.state.posts}
        />
      </Fragment>
    );
  }
}
