import  { SUCCESS , IDLE, LOADING, ERROR } from "./constants";





export const login = (user, password) =>(dispatch) =>{
        dispatch({type:"Auth/REQUESTED", payload:""})

        fetch('/api/auth/login',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user, password}) 

        })
        .then(async (res) => {
            
            const response = await res.json();
            let result={};

            if(!res.ok){
               
                result={type:"Auth/FAILED", payload:response};
            }else{
               result={type:"Auth/LOGIN", payload:""};
            }
           dispatch(result);
        })
        
    }
