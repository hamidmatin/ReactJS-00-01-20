import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageTitle } from '../page-tittle/PageTitle';
import { NewUser } from './NewUser';
import { User } from './User';

import './Users.css';

export const Users = ({ users }) => {
  // const [state, setstate] = useState(initialState)

  // const initialUsers = [
  //   {
  //     id: 1,
  //     name: 'Leanne Graham',
  //     username: 'Bret',
  //     email: 'Sincere@april.biz',
  //     address: {
  //       street: 'Kulas Light',
  //       suite: 'Apt. 556',
  //       city: 'Gwenborough',
  //       zipcode: '92998-3874',
  //       geo: {
  //         lat: '-37.3159',
  //         lng: '81.1496',
  //       },
  //     },
  //     phone: '1-770-736-8031 x56442',
  //     website: 'hildegard.org',
  //     company: {
  //       name: 'Romaguera-Crona',
  //       catchPhrase: 'Multi-layered client-server neural-net',
  //       bs: 'harness real-time e-markets',
  //     },
  //   },
  //   {
  //     id: 2,
  //     name: 'Ervin Howell',
  //     username: 'Antonette',
  //     email: 'Shanna@melissa.tv',
  //     address: {
  //       street: 'Victor Plains',
  //       suite: 'Suite 879',
  //       city: 'Wisokyburgh',
  //       zipcode: '90566-7771',
  //       geo: {
  //         lat: '-43.9509',
  //         lng: '-34.4618',
  //       },
  //     },
  //     phone: '010-692-6593 x09125',
  //     website: 'anastasia.net',
  //     company: {
  //       name: 'Deckow-Crist',
  //       catchPhrase: 'Proactive didactic contingency',
  //       bs: 'synergize scalable supply-chains',
  //     },
  //   },
  // ];
  // const [users, setUsers] = useState(initialUsers);

  const deleteUser = (id) => {
    // let newUsers = [...users];
    // newUsers = newUsers.filter((u) => u.id !== id);
    // setUsers(newUsers);

  };
  return (
    <React.Fragment>
      <PageTitle title='Users' />
      <div className='action-panel'>
        <Link to='users/new' className='btn btn-new'>New User</Link>
      </div>
      <div className='row'>
        {users.length !== 0 ? (
          users.map((user) => <User key={user.id} user={user} onDeleteUser={() => deleteUser(user.id)}/>)
        ) : (
          <p>List is Empty</p>
        )}
      </div>
    </React.Fragment>
  );
};
