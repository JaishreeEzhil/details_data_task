const SET_FORM = 'SET/FORM';

export const setForm = (payload) => ({
  type: SET_FORM,
  payload,
});

export default (state = null, { type, payload }) => {
  switch (type) {
    case SET_FORM:
      return payload;
    default:
      return state;
  }
};
