import { Grid, InputAdornment, Button, Alert, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CustomFormLabel from '../../forms/theme-elements/CustomFormLabel';
import CustomOutlinedInput from '../../forms/theme-elements/CustomOutlinedInput';
import { IconUser,  IconMail, IconPhone } from '@tabler/icons';

const KonselorEdit = () => {
    const { id } = useParams();
    const [konselor, setKonselor] = useState({
        nama: '',
        email: '',
        bidang: '',
        nomor_telepon: '',
        status_aktif: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const fetchKonselorById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:4000/konselor/${id}`);
            setKonselor(response.data);
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
        fetchKonselorById(id);
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setKonselor((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.prevenDefault();
        try {
            await axios.put(`http://localhost:4000/konselor/${id}`, konselor);
            setSuccess('Data Konselor Berhasil di Perbarui');
            setTimeout(() => {
                navigate('/dashboard/admin/konselor')
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
              };
        };
    };

    const handleCancel = () => {
        navigate(-1);
    }
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
          <CustomFormLabel htmlFor="nama" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
            Nama Konselor
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomOutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <IconUser size="20" />
              </InputAdornment>
            }
            id="nama"
            name="nama"
            value={konselor.nama}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        {/* 2 */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="email" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
            Email
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomOutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <IconMail size="20" />
              </InputAdornment>
            }
            id="email"
            name="email"
            value={konselor.email}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        {/* 3 */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bidang" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
            Bidang
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomOutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <IconMail size="20" />
              </InputAdornment>
            }
            id="bidang"
            name="bidang"
            value={konselor.bidang}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        {/* 4 */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="nomor_telepon" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
            Telepon
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomOutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <IconPhone size="20" />
              </InputAdornment>
            }
            id="nomor_telepon"
            name="nomor_telepon"
            value={konselor.nomor_telepon}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        {/* 5 */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
                    <CustomFormLabel htmlFor="status_aktif" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                        Status
                    </CustomFormLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <FormControl fullWidth>
                        <InputLabel id="status_aktif">Status Aktif</InputLabel>
                        <Select
                            labelId="status_aktif"
                            id="status_aktif"
                            name="status_aktif"
                            value={konselor.status_aktif}
                            onChange={handleChange}
                        >
                            <MenuItem value={true}>Aktif</MenuItem>
                            <MenuItem value={false}>Tidak Aktif</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={9}>
        <Box sx={{ 
            display: 'flex', 
            justifyContent: 'left', 
            alignItems: 'center', 
            height: '100%' }}>
          <Button sx={{ 
            mr: 2, 
            backgroundColor: "#F48C06",
            '&:hover': {backgroundColor: "#f7a944",}
            }} 
            variant="contained" 
            type="submit">
            Edit
          </Button>
          <Button sx={{ 
            backgroundColor:"#2F327D", 
            '&:hover': {backgroundColor: "#63659e"}}} 
            variant="contained" color="secondary" 
            type="button" 
            onClick={handleCancel}>
            Cancel
          </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
    );
};

export default KonselorEdit;