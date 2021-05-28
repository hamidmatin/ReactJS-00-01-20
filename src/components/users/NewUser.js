import React from 'react';
import { useHistory } from 'react-router';
import { PageTitle } from '../page-tittle/PageTitle';
import { UserForm } from './UserForm';
import UserInfo from './UserInfoClass';

export const NewUser = () => {
  const user = new UserInfo();

  const history = useHistory();

  const newUserHandler = (newUser) => {
    console.log(newUser);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => response.json())
    .then(data => { console.log(data)});

    history.push('/users');
  };
  return (
    <div>
      <PageTitle title='New User' />
      <UserForm user={user} onSubmitHandler={newUserHandler} />
    </div>
  );
};
