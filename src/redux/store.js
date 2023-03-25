import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactsApi';
import { filterContacts } from './filterContacts';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [filterContacts.name]: filterContacts.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware),
});
