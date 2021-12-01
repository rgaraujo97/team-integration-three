import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './auth';


 export const store = configureStore({
   //"".reducer e uma funcao do reducer
  reducer: {Auth: AuthSlice.reducer }
});

