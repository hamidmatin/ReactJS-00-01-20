import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { EDIT_USER } from '../../redux/actiontypes';
import { PageTitle } from '../page-tittle/PageTitle';
import { UserForm } from './UserForm';

export const EditUser = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const { id } = useParams()
  
  const user = useSelector(state => state.users.find(u => u.id.toString() === id))


  const editUserHandler = (user) =>{
    console.log(user);

    dispatch({
      type: EDIT_USER,
      payload: {user}
    })

    history.push('/users')
  }
  return (
    <div>
      <PageTitle title='New User' />
      <UserForm user={user} onSubmitHandler={editUserHandler}/>
    </div>
  );
}
