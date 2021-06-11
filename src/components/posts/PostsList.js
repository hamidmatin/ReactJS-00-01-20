import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
class PostsList extends Component {
  render() {
    return (
      <div className='row'>
        {this.props.posts ? (
          this.props.posts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p>List is Empty</p>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    posts : state.posts
  }
}

export default connect(mapStateToProps)(PostsList)