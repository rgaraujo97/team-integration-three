
import * as Types from './actionsType';

export const userLogedin = (user) => ({
    type: Types.LOADING_REQUEST,
    payload: {user},
});

// const store = createStore(loginUser);