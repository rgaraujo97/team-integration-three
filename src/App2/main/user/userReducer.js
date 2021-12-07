import { LocalDining } from "@mui/icons-material"
import  { SUCCESS , IDLE, LOADING, ERROR, FAILED } from "./constants";



const inititialState = {
    status: IDLE,
    error: {}
    
}

const userReducer = (state = inititialState, action) => {
    
    switch(action.type) {
        case "Auth/REQUESTED":
                return {...state,
                    status: LOADING }

        case"Auth/FAILED":
            return {...state,
                status: FAILED,
                error: action.payload}

        case "Auth/LOGIN":
            return {...state,
                    status: SUCCESS,
                    error: action.payload}
        default:
            return state
    }
}

export default userReducer


