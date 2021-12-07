import { React, useState} from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
//import styles from './Login.module.css';

//import { login } from '../../store/auth';
//import {Login} from '../'
import {login} from '../../App2/main/user/userActions'; 

import './Login.css';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



const Login = (props) => {

  const [user, setUser] = useState("");
  const[password, setPassword] = useState("");
 
  //const status = useSelector( state => state.Auth.status );
  //const error = useSelector( state => state.Auth.error );
  
  function handleLogin(){
    //dispatch(props.login(user, password))    
    props.login(user, password)
  }


  function handleChangeEmail(e){
    setUser(e.target.value)    
  }

  function handleChangePassword(e){
    setPassword(e.target.value)
  }


  return (
    /* <div className={styles.lg_BigDiv} >
      <div className={styles.greyThing}>
       
      </div>
      <div className={styles.lg_containerDiv} maxWidth="sm">
        <form className={styles.lg_formLogin}  component="form"  noValidate   autoComplete="off" >
         
          <div className={styles.lg_formInputsDiv}> */

          <div  className="container-flex row"   >
    <div  className="container-flex column grey display-only"  >
     
    </div>
    <div  className="container-flex column"  maxWidth="sm">
      <form  className="form-group--container formCenter" component="form"  noValidate   autoComplete="off" >
         


{/*  */}
            <TextField
             /* className={styles.lg_formInputs}*/
              margin="normal"
              required
              fullWidth
              id="email"  
              label="Email Address"  
              name="email"
              autoComplete="email"
              onChange={handleChangeEmail}

            />
            
            <TextField
              /*className={styles.lg_formInputs}*/
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChangePassword}
            />
              <div>
             
                <Button /* className={styles.lg_loginBtn} */variant="contained" onClick={handleLogin}>
                   {props.status === 'pending'  && <div /*className={styles.loader}*/></div>}  Login
                  </Button>
                </div>
          
          
       
          



           
          
        </form>
       

        {/* {props.status === 'error' && 
              <div className={styles.lg_Messages}>
              <div className={styles.lg_MessagesDetail}> <b>Oops!</b> </div>  <div className={styles.lg_MessagesDetail}>{error.user}{error.password}</div>
              </div> 
            } */}
            
        {props.status === 'failed'  && 
              <div /*className={styles.lg_Messages}*/>
              <div /*className={styles.lg_MessagesDetail}*/> <b>Oops!</b> </div>  <div /* className={styles.lg_MessagesDetail}*/>{props.error.user}{props.error.password}</div>
              </div> 
            }
          {props.status==='success' && 
            <div /* className={styles.lg_Messages}*/>
              {props.status}
            </div>
          }
        <footer /*className={styles.lg_bottomContainer}*/>Igor Ponte - Team Integration</footer>
      </div> 
      
    </div>
  );
}


const mapStateToProps = state =>({status:state.auth.status,error: state.auth.error});
const mapDispatchtoProps = dispatch =>bindActionCreators({login}, dispatch);

export default connect (mapStateToProps, mapDispatchtoProps)(Login)

