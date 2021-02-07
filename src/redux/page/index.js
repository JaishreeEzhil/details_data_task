const SET_PAGE_TITLE = 'PAGE/SET_TITLE';

export const actions = {
  setTitle: (title) => ({
    type: SET_PAGE_TITLE,
    payload: title,
  }),
};

export default (state = '', { payload, type }) => {
  switch (type) {
    case SET_PAGE_TITLE:
      return payload;
    default:
      return state;
  }
};
