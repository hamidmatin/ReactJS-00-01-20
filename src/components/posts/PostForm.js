import React, { Component } from 'react';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPost: props.post,
    };
  }

  componentDidUpdate(preProps) {
    console.log('old', preProps);
    console.log('new', this.props);
    if (preProps.post.id !== this.props.post.id)
      this.setState({ newPost: this.props.post });
  }
  onChangeTitle = (e) => {
    const newState = { ...this.state };
    newState.newPost.title = e.target.value;

    this.setState(newState);
  };
  onChangeBody = (e) => {
    const newState = { ...this.state };
    newState.newPost.body = e.target.value;

    this.setState(newState);
  };

  render() {
    return (
      <div>
        <form
          className='input-form'
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmitHandler(this.state.newPost);
          }}
        >
          <div className='input-form-row'>
            <label htmlFor='id'>ID :</label>
            <input
              id='id'
              type='text'
              defaultValue={this.state.newPost.id}
              disabled
            />
          </div>
          <div className='input-form-row'>
            <label htmlFor='title'>Title :</label>
            <input
              id='title'
              type='text'
              value={this.state.newPost.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className='input-form-row'>
            <label htmlFor='body'>Body :</label>
            <input
              id='body'
              type='text'
              value={this.state.newPost.body}
              onChange={this.onChangeBody}
            />
          </div>

          <div className='action-panel'>
            {/* <Link to='/users' className='btn btn-delete'>Cancel</Link> */}
            <button
              type='button'
              className='btn btn-delete'
              onClick={() => {
                window.history.back();
              }}
            >
              Cancel
            </button>
            <button type='submit' className='btn btn-new'>
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
