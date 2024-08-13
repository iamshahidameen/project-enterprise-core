import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { setSharedState } from '../../store/appSlice';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';

interface FormData {
  firstName: string;
  lastName: string;
  company?: string;
  contactPerson?: string;
  email: string;
  phoneNumber?: string;
  password?: string;
  terms: boolean;
}

const RegistrationFormV2 = () => {
  const sharedState = useSelector((state: RootState) => state.app.sharedState);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<FormData>(sharedState);

  // Handle change for all form inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSharedState(formData));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 400,
        margin: 'auto',
        mt: 5,
      }}
    >
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        B2B Sign Up
      </Typography>
      <TextField
        label="First Name"
        variant="outlined"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <TextField
        label="Last Name"
        variant="outlined"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Company"
        variant="outlined"
        type="company"
        name="company"
        value={formData?.company}
        onChange={handleChange}
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <FormControlLabel
        control={
          <Checkbox
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
        }
        label="I agree to the terms and conditions"
      />
      <Button
        variant="contained"
        sx={{ backgroundColor: '#2f3b69' }}
        type="submit"
      >
        Submit
      </Button>
    </Box>
  );
};

export default RegistrationFormV2;
