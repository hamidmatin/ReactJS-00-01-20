import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { PageTitle } from '../page-tittle/PageTitle';
import { UserForm } from './UserForm';
import UserInfo from './UserInfoClass'


export const NewUser = ({ addNewUser }) => {
  
  const user = new UserInfo()

  const history = useHistory()

  const newUserHandler = (newUser) =>{
    console.log(newUser)
    addNewUser(newUser);

    history.push('/users')
  }
  return (
    <div>
      <PageTitle title='New User' />
      <UserForm user={user} onSubmitHandler={newUserHandler}/>
    </div>
  );
};
