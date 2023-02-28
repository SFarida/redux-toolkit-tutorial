import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../fearures/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
