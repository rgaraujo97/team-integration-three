import React from "react"
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles'

const StyledTextField = styled(TextField)({
  width: '100%',
  backgroundColor: 'white',
  maxWidth: '300px',
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
        borderColor: '#443DF6',
    },
    
    '&.Mui-error fieldset': {
        borderColor: '#C5292A',
    },
  },
  'p': {
    fontWeight: 'bold',
  }
});

export const Input = props => {
    return (
        <StyledTextField id="outlined-basic" variant="outlined" {...props} />
    )
}