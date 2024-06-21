import { Grid, InputAdornment, Button, TextField, Alert, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers';
import CustomFormLabel from '../../forms/theme-elements/CustomFormLabel';
import CustomOutlinedInput from '../../forms/theme-elements/CustomOutlinedInput';
import { IconUser, IconSchool, IconBrandTelegram, IconUsers } from '@tabler/icons';



const StudentEdit = () => {
  const { id } = useParams();
  const [student, setStudents] = useState({
    name: '',
    jenis_kelamin: '',
    tanggal_lahir: null,
    kelas: '',
    alamat: '',
  });

  const [error, setError] =useState('');
  const [success, setSuccess] =useState('');
  const navigate = useNavigate();

  const fetchStudentById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/students/${id}`);
      setStudents(response.data);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        console.log(error.response.data);
        setError(error.response.data.msg);
      } else {
        console.error('Terjadi kesalahan pada server:', error.message);
        setError('Terjadi kesalahan pada server');
      }
    }
  };

  useEffect(() => {
    fetchStudentById(id);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudents((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setStudents((prevState) => ({
      ...prevState,
      tanggal_lahir: date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/students/${id}`, student);
      setSuccess('Data Siswa Berhasil di Perbarui');
      setTimeout(() => {
        navigate('/dashboard/admin/siswa')
      }, 3000);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        console.log(error.response.data);
        setError(error.response.data.msg);
      } else {
        console.error('Terjadi kesalahan pada server:', error.message);
        setError('Terjadi kesalahan pada server');
        setTimeout(() => {
          navigate('/auth/404') // Ganti pake 500 internal server error
        }, 3000);
      }
    }
  };

  const handleCancel = () => {
    navigate(-1); 
  };

  const ColorAlerts = ({ message }) => {
    return (
      <Alert severity="error">
        {message}
      </Alert>
    );
  };

  const ColorSuccess = ({ message }) => {
    return (
      <Alert severity="success">
        {message}
      </Alert>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box justifyContent={'center'} mb={5}>
      {error && <ColorAlerts message={error} />}
      {success && <ColorSuccess message={success} />}
      </Box>
      <Grid container spacing={3}>
      
        {/* 1 */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="name" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
            Nama Siswa
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomOutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <IconUser size="20" />
              </InputAdornment>
            }
            id="name"
            name="name"
            value={student.name}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        {/* 2 */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="jenis_kelamin" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
            Jenis Kelamin
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomOutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <IconUsers size="20" />
              </InputAdornment>
            }
            id="jenis_kelamin"
            name="jenis_kelamin"
            value={student.jenis_kelamin}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        {/* 3 */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="tanggal_lahir" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
            Tanggal Lahir
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              renderInput={(params) => (
                <TextField
                  {...params}
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
                  fullWidth
                />
              )}
              id="tanggal_lahir"
              name="tanggal_lahir"
              value={student.tanggal_lahir}
              onChange={handleDateChange}
            />
          </LocalizationProvider>
        </Grid>
        {/* 4 */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="kelas" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
            Kelas
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomOutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <IconSchool size="20" />
              </InputAdornment>
            }
            id="kelas"
            name="kelas"
            value={student.kelas}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        {/* 5 */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="alamat" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
            Alamat
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomOutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <IconBrandTelegram size="20" />
              </InputAdornment>
            }
            id="alamat"
            name="alamat"
            value={student.alamat}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', height: '100%' }}>
          <Button sx={{ 
            mr: 2, 
            backgroundColor: "#F48C06",
            '&:hover': {backgroundColor: "#f7a944",}
          }} variant="contained"  type="submit">
            Edit
          </Button>
          <Button sx={{ 
            backgroundColor:"#2F327D", 
            '&:hover': {backgroundColor: "#63659e"}}} 
            variant="contained" 
            color='secondary'
            type="button" onClick={handleCancel}>
            Cancel
          </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default StudentEdit;
