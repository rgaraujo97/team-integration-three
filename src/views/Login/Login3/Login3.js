import { React, useState} from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import '../Login.css';
//import styles from '../Login.module copy.css';


import {login} from '../../../App2/main/user/userActions'



import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'



const Login3 = (props) => {

  const [user, setUser] = useState("");
  const[invalidUser, setInvalidUser] = useState(true);
  const[password, setPassword] = useState("");
    

  //const status = useSelector( state => state.Auth.status );
  //const error = useSelector( state => state.Auth.error );
  
  function handleLogin(){
    //dispatch(props.login(user, password))    
    props.doLogin(user, password);
    
    if(user.indexOf('@')<=0){
      setInvalidUser(false);
    } else
    setInvalidUser(true);
    }


  function handleChangeEmail(e){
    setUser(e.target.value)    
  }

  function handleChangePassword(e){
    setPassword(e.target.value)
  }

  return (
    <div  className="container-flex row"   >
    <div  className="container-flex column grey display-only"  >
     
    </div>
    <div  className="container-flex column"  maxWidth="sm">
      <form  className="form-group--container formCenter formLogin" component="form"  noValidate   autoComplete="off" >
         
         


{/*  */}
{!invalidUser ?
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"  
              label="Email Address"  
              name="email"
              autoComplete="email"
              onChange={handleChangeEmail}
              error
              helperText="invalid email" 
            />
            :
            props.status === 'failed' && typeof props.error.user !== 'undefined' ?
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"  
              label="Email Address"  
              name="email"
              autoComplete="email"
              error
              onChange={handleChangeEmail}
            />
            :
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"  
              label="Email Address"  
              name="email"
              autoComplete="email"
              onChange={handleChangeEmail}
            />
            }
            {props.status === 'failed' ?
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChangePassword}
              error
            />
            :
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChangePassword}
            />
            }
              <div>
              
                <Button   variant="contained" onClick={handleLogin}>
                   {props.status === 'pending'  && <div className="loader"></div>}  Login
                  </Button>
                </div>
       
          
        </form>
       {props.status === 'failed'  && 
              <div className='Messages' >
              <div className="MessagesDetail"> <b>Oops!</b> </div>  <div className="MessagesDetail"/*className={styles.lg_MessagesDetail}*/>{props.error.user}{props.error.password}</div>
              </div> 
            }
          {props.status==='success' && 
            <div className='Messages' >
              {props.status}
            </div>
          }
            
        
        <footer className="footer" >Igor Ponte - Team Integration</footer>
      </div> 
     
      
    </div>
  );
}


const mapStateToProps = state =>({status:state.auth.status,error: state.auth.error,acess:state.auth.acess});


function mapDispatchToProps(dispatch){
  return { 
    doLogin: (user,password)=>{
        login(user, password)(dispatch);
  }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Login3)

// export default Login;