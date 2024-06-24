import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Button, Divider, Alert, IconButton, InputAdornment, MenuItem, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import { Stack } from '@mui/system';
import AuthSocialButtons from './AuthSocialButtons';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect'; // Pastikan import CustomSelect yang sesuai

const AuthRegister = ({ title, subtitle, subtext }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confPassword, setConfPassword] = useState('');
    const [showConfPassword, setShowConfPassword] = useState(false);
    const [jenis_kelamin_id, setJenisKelaminId] = useState(''); // Ubah nama state menjadi jenis_kelamin_id
    const [tanggal_lahir, setTanggalLahir] = useState(null);
    const [kelas_id, setKelasId] = useState(''); // Ubah nama state menjadi kelas_id
    const [alamat, setAlamat] = useState('');
    const [genderOptions, setGenderOptions] = useState([]);
    const [kelasOptions, setKelasOptions] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGenderOptions = async () => {
            try {
                const response = await axios.get('http://localhost:4000/users/jenis-kelamin');
                setGenderOptions(response.data);
            } catch (error) {
                console.error("Error fetching gender options:", error);
            }
        };

        const fetchKelasOptions = async () => {
            try {
                const response = await axios.get('http://localhost:4000/kelas');
                setKelasOptions(response.data);
            } catch (error) {
                console.error("Error fetching kelas:", error);
            }
        }

        fetchGenderOptions();
        fetchKelasOptions();
    }, []);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            await axios.post('http://localhost:4000/auth/register', {
                name,
                email,
                password,
                confPassword,
                jenis_kelamin_id, // Ubah menjadi jenis_kelamin_id
                tanggal_lahir,
                kelas_id, // Ubah menjadi kelas_id
                alamat
            });
            setSuccess('Registrasi berhasil! Silakan login.');
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
                    <CustomTextField
                        id="name"
                        variant="outlined"
                        placeholder="Nama Lengkap"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autoComplete="name"
                    />
                    <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                    <CustomTextField
                        id="email"
                        variant="outlined"
                        placeholder="@example"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                    />
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
                                        onMouseDown={(e) => e.preventDefault()}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        required
                    />
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
                        required
                    />
                    <Grid>
                        <CustomFormLabel htmlFor="jenis_kelamin_id">Jenis Kelamin</CustomFormLabel>
                        <CustomSelect
                            id="jenis_kelamin_id"
                            value={jenis_kelamin_id}
                            onChange={(e) => setJenisKelaminId(e.target.value)}
                            fullWidth
                            variant="outlined"
                        >
                            {genderOptions.map((genderOption) => (
                                <MenuItem key={genderOption.id} value={genderOption.id}>
                                    {genderOption.jenis_kelamin}
                                </MenuItem>
                            ))}
                        </CustomSelect>
                    </Grid>

                    <CustomFormLabel htmlFor="tanggal_lahir">Tanggal Lahir</CustomFormLabel>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            renderInput={(props) => (
                                <CustomTextField
                                    {...props}
                                    fullWidth
                                    size="medium"
                                />
                            )}
                            placeholder="Tanggal Lahir"
                            value={tanggal_lahir}
                            onChange={(newValue) => setTanggalLahir(newValue)}
                            required
                        />
                    </LocalizationProvider>
                    <CustomFormLabel htmlFor="kelas_id">Kelas</CustomFormLabel>
                    <CustomSelect
                       id="kelas_id"
                       name="kelas_id"
                       value={kelas_id}
                       onChange={(e) => setKelasId(e.target.value)}
                       fullWidth
                       variant="outlined"
                       required
                    >
                        {kelasOptions.map((kelasOption) => (
                            <MenuItem key={kelasOption.id} value={kelasOption.id}>
                                {kelasOption.nama_kelas}
                            </MenuItem>
                            ))}
                    </CustomSelect>
                    <CustomFormLabel htmlFor="alamat">Alamat</CustomFormLabel>
                    <CustomTextField
                        id="alamat"
                        variant="outlined"
                        placeholder="Alamat"
                        fullWidth
                        value={alamat}
                        onChange={(e) => setAlamat(e.target.value)}
                        required
                    />
                </Stack>
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                        backgroundColor: "#F48C06",
                        '&:hover': {
                            backgroundColor: "#f7a944",
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
