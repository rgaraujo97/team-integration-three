import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from "./Auth/loginReducer"

export const store = configureStore({
  reducer: {
    Auth : AuthSlice.reducer
  },
});