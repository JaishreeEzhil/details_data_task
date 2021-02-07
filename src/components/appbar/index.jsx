import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import './style.css';

const AppBar = () => {
  const { pageTitle, form } = useSelector((state) => state);
  const match = useRouteMatch();
  const history = useHistory();

  return (
    <div className="flex items-center justify-between flex-wrap bg-teal p-6 bg-yellow-500">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <svg className="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
        <span className="font-semibold text-xl tracking-tight">{pageTitle}</span>
      </div>

      <div className="actions">
        {(match.path === '/' && match.isExact)
          ? <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white" type="button" onClick={() => history.push('/add')}>Add</button>
          : (
            <>
              <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white" type="button" onClick={() => form.handleSubmit()}>Save</button>
            </>
          )}
      </div>
    </div>
  );
};

export default AppBar;
