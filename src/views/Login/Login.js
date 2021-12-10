import React, { useEffect } from 'react';
import styles from "./styles.module.css"
import { Form } from "../../components/Form"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Alert } from "../../components/Alert"
import Container from '@mui/material/Container';
import {  useDispatch } from 'react-redux';
import { login } from "../../store/pure-store/store/actions"

const Login = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(login({}))
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.landingColumn}></div>
      <div className={styles.formColumn}>
        <Container>
          <Form>
            <Input label="Username"></Input>
            <Input label="Password"></Input>
            <Button className={styles.cta}>Login</Button>
          </Form>
        
          <Alert variant="primary" title="Ops!" label="Email and/or password invalids" />

          </Container>
        </div>
    </div>
  );
}

export default Login