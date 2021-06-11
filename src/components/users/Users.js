import React from 'react';

import NewPanel from '../newPanel/NewPanel';
import { PageTitle } from '../page-tittle/PageTitle';

import UserList from './UserList';

import './Users.css';

export const Users = () => {
  
  return (
    <React.Fragment>
      <PageTitle title='Users' />

      <NewPanel caption='New User' to='/users/new' />

      <UserList />
    </React.Fragment>
  );
};
