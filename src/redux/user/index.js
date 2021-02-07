/* eslint-disable eqeqeq */
import GENDERS from '../../GENDERS';

const ADD_USER = 'USER/ADD';
const UPDATE_USER = 'USER/UPDATE';
const DELETE_USER = 'USER/DELETE';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload,
});

export const deleteUser = (payload) => ({
  type: DELETE_USER,
  payload,
});

const initialState = [{
  id: 1,
  name: 'Test01',
  age: 10,
  gender: GENDERS[0].description,
  address: 'Sesame Street, 10',
  email: 'test01@example.com',
}, {
  id: 2,
  name: 'Test02',
  age: 10,
  gender: GENDERS[2].description,
  address: 'Sesame Street, 10',
  email: 'test02@example.com',
}, {
  id: 3,
  name: 'Test03',
  age: 10,
  gender: GENDERS[1].description,
  address: 'Sesame street, 12',
  email: 'test03@example.com',
}];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return [payload, ...state];

    case UPDATE_USER:
      return state.map((user) => {
        if (user.id == payload.id) {
          return payload;
        }
        return user;
      });

    case DELETE_USER:
      return state.filter((user) => user.id != payload);

    default:
      return state;
  }
};
