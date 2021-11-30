import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './auth';


 export const store = configureStore({
  reducer: {Auth:AuthSlice.reducer }
});

