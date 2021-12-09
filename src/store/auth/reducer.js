import { RestorePageOutlined } from '@mui/icons-material';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//ACTIONS TO DO A REQUEST TO AN API, WHERE USER CAN LOGIN INTO AN APP
export const requestReducer = createAsyncThunk(
    "auth/login",
    async ({ user, password }, {rejectWithValue}) => {
         
        const response = await fetch(`/api/auth/login`, {
            method: "POST",
            body: JSON.stringify({user, password})
        })
        const payload = await response.json();
        
        if (!response.ok) {
              return rejectWithValue(payload)
        }
        return { status: response.ok, payload, }
       
    })

// Then, handle actions in your reducers:
const loginSlice = createSlice({
  name: 'auth',
  initialState: { logStatus: "IDLE", error: {},},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(requestReducer.pending, (state, action) => {
            if (state.logStatus === 'IDLE') {
                state.logStatus = 'pending';
            }
        })
            .addCase(requestReducer.fulfilled, (state, action) => {
                state.logStatus = 'fulfilled';
             
            })
            .addCase(requestReducer.rejected, (state, action) => {
                state.error = action.payload
            })
  }
})
export default loginSlice.reducer;
