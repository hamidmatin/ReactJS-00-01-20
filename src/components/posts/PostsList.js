import React, { Component } from 'react'
import Post from './Post'

export default class PostsList extends Component {
  render() {
    return (
      <div className='row'>
        {this.props.posts.length !== 0 ? (
          this.props.posts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p>List is Empty</p>
        )}
      </div>
    )
  }
}
