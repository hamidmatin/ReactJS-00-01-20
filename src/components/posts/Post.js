import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Post extends Component {
  render() {
    return (
      <div className='col-md-6 col-lg-4'>
      <div className='card'>
        <h3 className='card-title'>{this.props.post.title}</h3>
        <div>
          <span className='student-label'>User ID :</span>
          <span className='student-value'>{this.props.post.id}</span>
        </div>
        <div>
          <span className='student-label'>Body :</span>
          <span className='student-value'>{this.props.post.body}</span>
        </div>

        <div className="action-panel">
          <Link to={'/posts/edit/' + this.props.post.id} className='btn btn-edit'>Edit</Link>
          <button className='btn btn-delete'>Delete</button>
        </div>
      </div>
    </div>
    )
  }
}
