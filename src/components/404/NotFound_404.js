import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound_404() {
  return (
    <div>
       <h2 className='page-title'>
        <span>Page Not Found</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro culpa nemo fuga corporis. Rerum eum facilis exercitationem odio dolorem expedita pariatur aperiam quia natus eligendi, hic aspernatur porro. Impedit, ad.</p>
        <Link  to='/'>Home</Link>
      </h2>
    </div>
  )
}
