import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import './style.css';

const AppBar = () => {
  const { pageTitle, form } = useSelector((state) => state);
  const match = useRouteMatch();
  const history = useHistory();

  return (
    <div className="appbar">
      <div className="title">
        <h1>{pageTitle}</h1>
      </div>
      <div className="actions">
        {(match.path === '/' && match.isExact)
          ? <button type="button" onClick={() => history.push('/add')}>Add</button>
          : (
            <>
              <button type="button" onClick={() => form.handleSubmit()}>Save</button>
            </>
          )}
      </div>
    </div>
  );
};

export default AppBar;
