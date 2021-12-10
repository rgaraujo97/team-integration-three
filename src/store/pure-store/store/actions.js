import { useLogin } from "../../../hooks/login"
import { LOGIN_REJECTED, LOGIN_REQUEST } from "../../types"



export const login = ({user, password}) => async dispatch => {
    const { login } = useLogin()
    dispatch({type: LOGIN_REQUEST})

    const response = await login({user, password})

    if(!response.ok) {
        dispatch({type: LOGIN_REJECTED})
    }

}