import React, { Component } from 'react'
import Nav from '../nav/Nav'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>React Case Study Project</h1>
        <Nav />
      </div>
    )
  }
}
