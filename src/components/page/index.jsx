import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/page';

const Page = ({ title, Component }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.setTitle(title));
  }, [title]);
  return (<Component />);
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
  Component: PropTypes.func.isRequired,
};

export default Page;
