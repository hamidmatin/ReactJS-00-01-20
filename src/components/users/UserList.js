import React from 'react'
import { User } from './User'

const UserList = ({users}) => {
  return (
    <div className='row'>
        {users.length !== 0 ? (
          users.map((user) => <User key={user.id} user={user} />)
        ) : (
          <p>List is Empty</p>
        )}
      </div>
  )
}

export default UserList
