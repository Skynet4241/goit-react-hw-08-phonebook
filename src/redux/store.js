import { configureStore } from '@reduxjs/toolkit';
import registrationApi from './auth-operations';

import { contactApi } from './contactsApi';
import { filterContacts } from './filterContacts';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [filterContacts.name]: filterContacts.reducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      contactApi.middleware,
      registrationApi.middleware
    ),
});
