import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://connections-api.herokuapp.com';

const registrationApi = createApi({
  reducerPath: 'registrationApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    registration: builder.mutation({
      query: body => ({
        url: '/users/signup',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegistrationMutation } = registrationApi;
export default registrationApi;
