import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = '/contacts';
const BASE_URL = 'https://641444da727d1c0df005d679.mockapi.io';

export const contactApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ['Contacts'],
    }),

    addContacts: builder.mutation({
      query: body => {
        return {
          url: API_ENDPOINT,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query(id) {
        return {
          url: `${API_ENDPOINT}/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactsMutation,
  useDeleteContactMutation,
} = contactApi;
