import React, { useState, useEffect } from 'react';
import { Box, Typography, FormGroup, FormControlLabel, Button, Stack, Divider, InputAdornment, IconButton, Alert } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import AuthSocialButtons from './AuthSocialButtons';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axiosInstance from 'src/utils/axiosInstance';
import { setUser } from 'src/store/apps/user/userSlice';

const AuthLogin = ({ title, subtitle, subtext }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('expired')) {
      setError('Session expired. Please login again.');
    }
  }, [location.search]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axiosInstance.post('/auth/login', {
        email,
        password
      });

      const { name, role, accessToken, userId } = response.data;
      localStorage.setItem('accessToken', accessToken);
      dispatch(setUser({ name, role, accessToken, userId }));

      if (role === 'admin') {
        navigate('/dashboard/admin');
      } else if (role === 'siswa') {
        navigate('/dashboard/siswa');
      } else {
        setError('Unknown user role.');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.msg);
      } else {
        setError('Something went wrong. Please try again later.');
      }
    }
  };
  

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          <Box mb={5}>
            {error && <ColorAlerts message={error} />}
          </Box>
          {title}
        </Typography>
      ) : null}
      {subtext}
      <AuthSocialButtons title="Sign in with" />
      <Box mt={3}>
        <Divider>
          <Typography component="span" color="textPrimary" variant="h6" fontWeight="400" position="relative" px={2}>
            or sign in with
          </Typography>
        </Divider>
      </Box>

      <Stack>
        <Box component="form" onSubmit={handleLogin}>
          <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
          <CustomTextField
            id="email"
            name="email"
            variant="outlined"
            placeholder="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            sx={{
              '& .MuiInputBase-input::placeholder': {
                color: 'gray',
              },
            }}
          />

          <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
          <CustomTextField
            id="password"
            name="password"
            variant="outlined"
            placeholder="Password"
            fullWidth
            value={password}
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            sx={{
              '& .MuiInputBase-input::placeholder': {
                color: 'gray',
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            my={2}
          >
            <FormGroup>
              <FormControlLabel
                control={<CustomCheckbox defaultChecked />}
                label="Remeber this Device"
              />
            </FormGroup>
            <Typography
              component={Link}
              to="/auth/forgot-password"
              fontWeight="500"
              sx={{
                textDecoration: 'none',
                color: 'primary.main',
              }}
            >
              Forgot Password?
            </Typography>
          </Stack>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            type="submit"
          >
            Sign In
          </Button>
        </Box>
      </Stack>
      

      {subtitle}
      
    </>
    
  );
};

const ColorAlerts = ({ message }) => {
  return (
    <Alert severity="error">
      {message}
    </Alert>
  );
};

export default AuthLogin;
