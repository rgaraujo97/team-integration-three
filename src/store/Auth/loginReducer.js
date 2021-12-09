import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const IDLE = 'idle',
LOADING = 'pending'


const initialState = {
    status: IDLE,
    error: {},
}

export const authLogin = createAsyncThunk(
  "Auth/Login",
  async ({user, password}) => {
      console.log(password);
      return fetch('/api/auth/login',{
          method: 'POST',
          headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({user, password}) 
      }).then(async (res) => {
          const response = await res.json();
          const payload = {
              status: res.ok,
              error: {}           
          };
          if(!res.ok){
              payload.error = response;
          }else{
              window.localStorage.setItem("token",response.bearer_token)
          }
          return payload;
      })
  }
)


const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers:{
      setIddle(state){
          state.status = IDLE;
      }
  },
  extraReducers: (builder => {
      builder 
          .addCase(authLogin.pending,(state) =>{
              state.status = LOADING ;
          })

          .addCase(authLogin.fulfilled,(state,{payload}) =>{                                      
              state.status = payload.status;
              state.error = payload.error;
          })    

  })
})

export default AuthSlice;