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
    /* eslint-disable */
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div className="container mx-auto px-6 py-8">
          <h3 className="text-gray-700 text-3xl font-medium">Users List</h3>
          <div className="flex flex-col mt-8">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div
                className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <table className="min-w-full text-centre">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Name</th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Email</th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Address</th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Age</th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Gender</th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {users.map((user) => (
                      <tr key={`${user.id}`}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                alt="" />
                            </div>

                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900">{user.name}</div></div></div></td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">{user.email}</div></td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">{user.address}</div></td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">{user.age}</div></td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">{user.gender}</div></td>
                        <td className="px-6 py-4 whitespace-no-wrap text-centre border-b border-gray-200 text-sm leading-5 font-medium">
                          <button className="text-indigo-600 hover:text-indigo-900" type="button" onClick={() => history.push(`/edit/${user.id}`)}>Edit</button>
                          <span> / </span>
                          <button className="text-indigo-600 hover:text-indigo-900" type="button" onClick={() => dispatch(deleteUser(user.id))}>Remove</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    /* eslint-disable */
  );
};

export default UsersList;
