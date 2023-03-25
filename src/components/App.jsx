import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PAGE_NAMES } from './Router/path';
import { MainLayouts } from './Layouts/MainLayouts';
import { Homepage } from 'pages/Homepage/Homepage';
import { Contacts } from 'pages/Contacts/Contacts';
import { Registration } from './Registration/Registration';
import { Login } from './Login/Login';

// const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={PAGE_NAMES.homepage} element={<MainLayouts />}>
          <Route index path={PAGE_NAMES.homepage} element={<Homepage />} />
          <Route path={PAGE_NAMES.contacts} element={<Contacts />} />
          <Route path={PAGE_NAMES.signup} element={<Registration />} />
          <Route path={PAGE_NAMES.login} element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};
