import React from 'react';
import { Link } from 'react-router-dom';

export const User = ({ user, onDeleteUser }) => {
  return (
    <div className='col-md-6 col-lg-4'>
      <div className='card'>
        <h3 className='card-title'>{user.name}</h3>
        <div>
          <span className='student-label'>User Name :</span>
          <span className='student-value'>{user.username}</span>
        </div>
        <div>
          <span className='student-label'>E-mail :</span>
          <span className='student-value'>{user.email}</span>
        </div>

        <div className="action-panel">
          <Link to={'/users/edit/' + user.id} className='btn btn-edit'>Edit</Link>
          <button onClick={onDeleteUser} className='btn btn-delete'>Delete</button>
        </div>
      </div>
    </div>
  );
};
