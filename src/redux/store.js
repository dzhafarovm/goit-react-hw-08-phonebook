import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

import { contactApi } from 'redux/Phonebook/ContactSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const middleware = [...getDefaultMiddleware(), contactApi.middleware];

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);
