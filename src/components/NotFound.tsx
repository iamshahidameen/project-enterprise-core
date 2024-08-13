import React from 'react';
import Alert from '@mui/material/Alert';
import ErrorIcon from '@mui/icons-material/Error';
import { Box } from '@mui/material';

const NotFound = () => {
  return (
    <Box
      marginTop={10}
      maxWidth={250}
      style={{
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        top: '50%',
        left: '50%',
      }}
    >
      <Alert icon={<ErrorIcon fontSize="inherit" />} severity="error">
        No Component Found
      </Alert>
    </Box>
  );
};

export default NotFound;
