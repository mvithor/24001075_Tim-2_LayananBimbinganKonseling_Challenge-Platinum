import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, FormControl, InputLabel, Select, MenuItem, Alert } from '@mui/material';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import { Stack } from '@mui/system';
import AuthSocialButtons from './AuthSocialButtons';

const AuthRegister = ({ title, subtitle, subtext }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confPassword, setConfPassword] = useState('');
    const [showConfPassword, setShowConfPassword] = useState(false);
    const [jenis_kelamin, setJenisKelamin] = useState('');
    const [tanggal_lahir, setTanggalLahir] = useState(null);
    const [kelas, setKelas] = useState('');
    const [alamat, setAlamat] = useState('');
    const [genderOptions, setGenderOptions] = useState([]);
    const [error, setError] = useState('');
    const [succes, setSucces] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGenderOptions = async () => {
            try {
                const response = await axios.get('http://localhost:4000/students/jenis-kelamin');
                setGenderOptions(response.data);
            } catch (error) {
                console.error("Error fetching gender options:", error);
            }
        };

        fetchGenderOptions();
    }, []);
    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSucces('');
        try {
            await axios.post('http://localhost:4000/auth/register', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword,
                jenis_kelamin: jenis_kelamin,
                tanggal_lahir: tanggal_lahir,
                kelas: kelas,
                alamat: alamat
            });
            setSucces('Registrasi berhasil! Silakan login.');
            setTimeout(() => {
                navigate('/auth/login');
            }, 2000); // Redirect after 2 seconds
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                setError(error.response.data.msg);
            }
        }
    }
    // const handleRegister = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post('http://localhost:4000/auth/register', {
    //             name: name,
    //             email: email,
    //             password: password,
    //             confPassword: confPassword,
    //             jenis_kelamin: jenis_kelamin,
    //             tanggal_lahir: tanggal_lahir,
    //             kelas: kelas,
    //             alamat: alamat
    //         });
    //         navigate('/auth/login');
    //     } catch (error) {
    //         if (error.response) {
    //             console.log(error.response.data);
    //             setMsg(error.response.data.msg);
    //         }
    //     }
    // }
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
            <AuthSocialButtons title="Sign up with" />
            <Box mt={3}>
                <Divider>
                    <Typography
                        component="span"
                        color="textPrimary"
                        variant="h6"
                        fontWeight="400"
                        position="relative"
                        px={2}
                    >
                        or sign up with
                    </Typography>
                </Divider>
            </Box>
            <Box component="form" onSubmit={handleRegister}>
                <Stack mb={3}>
                    <CustomFormLabel htmlFor="name">Nama Lengkap</CustomFormLabel>
                    <CustomTextField id="name"
                     variant="outlined" 
                     placeholder="Nama Lengkap" 
                     sx={{
                        '& .MuiInputBase-input::placeholder': {
                          color: 'gray',
                        },
                      }}
                     fullWidth value={name} 
                     onChange={(e) => setName(e.target.value)} required autoComplete="name"  />
                    <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                    <CustomTextField id="email" 
                    variant="outlined" 
                    placeholder ="@example"
                    sx={{
                        '& .MuiInputBase-input::placeholder': {
                          color: 'gray',
                        },
                      }}
                    fullWidth value={email} 
                    onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
                    <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
                    <CustomTextField
                        id="password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword(!showPassword)}
                                        onMouseDown={(e) => e.preventDefault()} >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    required/>
                    <CustomFormLabel htmlFor="confPassword">Konfirmasi Password</CustomFormLabel>
                    <CustomTextField
                        id="confPassword"
                        variant="outlined"
                        fullWidth
                        value={confPassword}
                        type={showConfPassword ? 'text' : 'password'}
                        onChange={(e) => setConfPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowConfPassword(!showConfPassword)}
                                        onMouseDown={(e) => e.preventDefault()}
                                    >
                                        {showConfPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    required/>
                    <CustomFormLabel htmlFor="jenis_kelamin">Jenis Kelamin</CustomFormLabel>
                    <FormControl fullWidth>
                        <InputLabel id="jenis_kelamin">Jenis Kelamin</InputLabel>
                        
                        <Select
                            labelId="jenis_kelamin"
                            id="jenis_kelamin"
                            value={jenis_kelamin}
                            onChange={(e) => setJenisKelamin(e.target.value)}
                            sx={{
                                '& .MuiSelect-select': {
                                  color: 'gray',
                                },
                              }}
                            >
                            {genderOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <CustomFormLabel htmlFor="tanggal_lahir">Tanggal Lahir</CustomFormLabel>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            renderInput={(props) => (
                                <CustomTextField
                                    {...props}
                                    fullWidth
                                    size="small"
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            width: 18,
                                            height: 18,
                                        },
                                        '& .MuiFormHelperText-root': {
                                            display: 'none',
                                        },
                                        '& .MuiInputBase-input::placeholder': {
                                            color: 'gray',
                                          },
                                    }}
                                />
                            )}
                            placeholder="DatePicker"
                            value={tanggal_lahir} 
                            onChange={(newValue) => {
                                setTanggalLahir(newValue); 
                            }}
                        required/>
                    </LocalizationProvider>
                    <CustomFormLabel htmlFor="kelas">Kelas</CustomFormLabel>
                    <CustomTextField id="kelas" 
                    variant="outlined" 
                    placeholder ="Kelas"
                    sx={{
                        '& .MuiInputBase-input::placeholder': {
                          color: 'gray',
                        },
                      }}
                    fullWidth value={kelas} 
                    onChange={(e) => setKelas(e.target.value)} required />
                    <CustomFormLabel htmlFor="alamat">Alamat</CustomFormLabel>
                    <CustomTextField id="alamat" 
                    variant="outlined" 
                    placeholder ="Alamat" 
                    sx={{
                        '& .MuiInputBase-input::placeholder': {
                          color: 'gray',
                        },
                      }}
                    fullWidth value={alamat} 
                    onChange={(e) => setAlamat(e.target.value)} required />
                </Stack>
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                        backgroundColor: "#F48C06",
                        '&:hover': {
                          backgroundColor: "#fa9e28",
                        }
                      }}
                    type="submit"
                >
                    Sign Up
                </Button>
            </Box>
        
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
  
export default AuthRegister;
