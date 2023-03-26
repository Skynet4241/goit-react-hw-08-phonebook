import React from 'react';
import { useUser } from 'components/hooks/useUser';
import { Navigate } from 'react-router-dom';
import { PAGE_NAMES } from 'components/Router/path';

export const PublicRouter = ({ children }) => {
  const { isAuth } = useUser();

  return (
    <>{isAuth ? <Navigate to={PAGE_NAMES.contacts} replace /> : children}</>
  );
};
