import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const SUCCESS = 'success'
const IDLE = 'idle',
LOADING = 'pending',
ERROR = 'error'


const inititialState = {
    status: IDLE,
    error: {},
}

//action creator
export const login = createAsyncThunk(
    "Auth/Login",
    async ({user, password}) => {
        return await fetch('/api/auth/login',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user, password}) 

        }).then(async (res) => {
            
            const response = await res.json();

            const pl = {
                status: res.ok ? SUCCESS : ERROR,
                error: {}           
            };

            if(!res.ok){
                pl.error = response;
            }else{
                window.localStorage.setItem("token",response.bearer_token)
            }

            return pl;
        })
            
            
    }
)


const AuthSlice = createSlice({
    name: "Auth",
    initialState: inititialState,
    reducers:{
        setIddle(state){
            // state.status=IDLE
            state.status = IDLE;
        }
    },
    extraReducers: (builder => {
        builder 
            .addCase(login.pending,(state) =>{                
                state.status = LOADING ;
            })

            .addCase(login.fulfilled,(state,{payload}) =>{                                             
                state.status = payload.status;
                state.error = payload.error;
            })    

    })
})

export const{ setIddle } = AuthSlice.actions;

export default AuthSlice;
