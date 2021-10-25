import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),

  tagTypes: ['Contact'],

  endpoints: builder => ({
    registerUser: builder.mutation({
      query: user => ({
        url: '/users/signup/',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Contact'],
    }),

    loginUser: builder.mutation({
      query: user => ({
        url: '/users/login/',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Contact'],
    }),

    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),

    createContact: builder.mutation({
      query: newContact => ({
        url: '/contacts/',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
} = contactApi;
