import React from 'react'
import { Link } from 'react-router-dom'

const NewPanel = ({caption, to}) => {
  return (
    <div className='action-panel'>
        <Link to={to} className='btn btn-new'>{caption}</Link>
      </div>
  )
}

export default NewPanel
