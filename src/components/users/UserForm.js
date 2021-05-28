import React, { useState } from 'react';

export const UserForm = ({ user, onSubmitHandler }) => {
  const [newUser, setNewUser] = useState(user);

  const onChangeName = (e) => {
    // console.log(e.target.value)
    setNewUser({
      ...newUser,
      name: e.target.value,
    });
  };

  const onChangeUserName = (e) => {
    setNewUser({
      ...newUser,
      username: e.target.value,
    });
  };

  const onChangeEmail = (e) => {
    setNewUser({
      ...newUser,
      email: e.target.value,
    });
  };

  const onChangePhone = (e) => {
    setNewUser({
      ...newUser,
      phone: e.target.value,
    });
  };

  const onChangeWebsite = (e) => {
    setNewUser({
      ...newUser,
      website: e.target.value,
    });
  };

  // const onSubmit = (e) => {
  //   e.preventDefault()

  // }
  return (
    <div>
      <form
        className='input-form'
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(newUser);
        }}
      >
        <div className='input-form-row'>
          <label htmlFor='id'>ID :</label>
          <input id='id' type='text' defaultValue={newUser.id} disabled/>
        </div>
        <div className='input-form-row'>
          <label htmlFor='name'>Name :</label>
          <input
            id='name'
            type='text'
            value={newUser.name}
            onChange={onChangeName}
          />
        </div>
        <div className='input-form-row'>
          <label htmlFor='username'>User Name :</label>
          <input
            id='username'
            type='text'
            value={newUser.username}
            onChange={onChangeUserName}
          />
        </div>
        <div className='input-form-row'>
          <label htmlFor='email'>E-mail :</label>
          <input
            id='email'
            type='text'
            value={newUser.email}
            onChange={onChangeEmail}
          />
        </div>
        <div className='input-form-row'>
          <label htmlFor='phone'>Phone :</label>
          <input
            id='phone'
            type='text'
            value={newUser.phone}
            onChange={onChangePhone}
          />
        </div>
        <div className='input-form-row'>
          <label htmlFor='website'>Website :</label>
          <input
            id='website'
            type='text'
            value={newUser.website}
            onChange={onChangeWebsite}
          />
        </div>

        <div className='action-panel'>
          <button type='submit' className='btn btn-new'>
            Add New
          </button>
        </div>
      </form>
    </div>
  );
};
