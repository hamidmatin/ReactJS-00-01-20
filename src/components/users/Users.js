import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import withLoading from '../../HOC/withLoading';
import NewPanel from '../newPanel/NewPanel';
import { PageTitle } from '../page-tittle/PageTitle';
import { NewUser } from './NewUser';
import { User } from './User';
import UserList from './UserList';

import './Users.css';

export const Users = () => {
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const deleteUser = (id) => {
    // let newUsers = [...users];
    // newUsers = newUsers.filter((u) => u.id !== id);
    // setUsers(newUsers);
  };

  /*
    useEffect(() => {
      effect                   => for mounting and updating
      return () => {
        cleanup                => unmounting
      }
    }, [input])                => list of dependencies

  */

  useEffect(() => {
    console.log('Use Effect call after change any state (mount and update)');
  });

  useEffect(() => {
    console.log('Use Effect (did mount)');
  }, []);

  useEffect(() => {
    console.log('Use Effect (mount and after change isLoading)');
  }, [isLoading]);

  useEffect(() => {
    return () => {
      console.log('clean (unmount)');
    };
  }, []);
  /***************************** */

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setUsers(data)
      setIsLoading(false)
    })
  }, [])
  const UserListWithLoading = withLoading(UserList);
  return (
    <React.Fragment>
      <PageTitle title='Users' />

      <NewPanel caption='New User' to='/users/new' />

      <UserListWithLoading isLoading={isLoading} users={users} />
    </React.Fragment>
  );
};
