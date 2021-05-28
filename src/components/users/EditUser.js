import React from 'react'
import { useHistory } from 'react-router';
import { PageTitle } from '../page-tittle/PageTitle';
import { UserForm } from './UserForm';
import UserInfo from './UserInfoClass'

export const EditUser = ({updateUser}) => {
 
  const user = new UserInfo()

  const history = useHistory()

  const editUserHandler = (user) =>{
    console.log(user);

    updateUser(user)
    history.push('/users')
  }
  return (
    <div>
      <PageTitle title='New User' />
      <UserForm user={user} onSubmitHandler={editUserHandler}/>
    </div>
  );
}
