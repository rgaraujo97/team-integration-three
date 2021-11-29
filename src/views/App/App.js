import React from 'react';
import Stack from '@mui/material/Stack';
import "./app.css"
import { Button } from "./components/Button"
import { Typography } from './components/Typography';

const App = () => {
  return (
    <div>
      <Button primary>Login 2</Button>
      <Button secondary large>Login 2</Button>
      <Typography> Teste </Typography>
    </div>
  );
}

export default App;
