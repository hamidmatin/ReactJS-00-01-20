import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { NEW_USER } from '../../redux/actiontypes';
import { PageTitle } from '../page-tittle/PageTitle';
import { UserForm } from './UserForm';
import UserInfo from './UserInfoClass';

export const NewUser = () => {
  const user = new UserInfo();

  const history = useHistory();
  const dispatch = useDispatch();

  const newUserHandler = (newUser) => {
    console.log(newUser);
    
    dispatch({
      type: NEW_USER,
      payload: { user: newUser }
    })

    history.push('/users');
  };
  return (
    <div>
      <PageTitle title='New User' />
      <UserForm user={user} onSubmitHandler={newUserHandler} />
    </div>
  );
};
