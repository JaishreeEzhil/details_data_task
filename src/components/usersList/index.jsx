import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteUser } from '../../redux/user';
import './style.css';

const UsersList = () => {
  const { users } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="users">
      <table className="users__list" cellPadding={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={`${user.id}`}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>
                <button type="button" onClick={() => history.push(`/edit/${user.id}`)}>Edit</button>
                <button type="button" onClick={() => dispatch(deleteUser(user.id))}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
