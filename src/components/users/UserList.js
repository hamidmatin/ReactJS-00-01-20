import React from 'react'
// import { useState } from 'react'
import { useSelector } from 'react-redux'
import { User } from './User'

const UserList = () => {
  const users = useSelector(state => state.users)
  // const [users, setUsers] = useState(useSelector(state=>state.users))
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
