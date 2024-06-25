import React, { useState, useEffect } from 'react';
import { Grid, Box, Button, MenuItem, Alert } from '@mui/material';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import { IconUser, IconSchool, IconBrandTelegram } from '@tabler/icons';
import DateInput from './DateInput';
import FormInput from './FormInput';
import GenderSelect from './GenderSelect';
import axiosInstance from 'src/utils/axiosInstance';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';

const StudentEditForm = ({ student, handleChange, handleDateChange, handleSubmit, handleCancel }) => {
  const [kelasOptions, setKelasOptions] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchKelasOptions = async () => {
      try {
        const response = await axiosInstance.get('/kelas');
        setKelasOptions(response.data);
      } catch (error) {
        console.error("Error fetching kelas options:", error);
      }
    };

    fetchKelasOptions();
  }, []);

  if (!student) {
    return null;
  }

  const initialStudent = {
    name: '',
    jenis_kelamin_id: '',
    tanggal_lahir: '',
    kelas_id: '',
    alamat: ''
  };

  const currentStudent = { ...initialStudent, ...student };
  const validKelasId = kelasOptions.some(kelas => kelas.id === currentStudent.kelas_id) ? currentStudent.kelas_id : '';

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!currentStudent.name || !currentStudent.jenis_kelamin_id || !currentStudent.tanggal_lahir || !validKelasId || !currentStudent.alamat) {
      setErrorMessage("Semua form harus diisi.");
      return;
    }

    setErrorMessage('');
    handleSubmit(e);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Box sx={{ p: 3, bgcolor: 'background.paper', boxShadow: 2 }}>
        <Grid container spacing={3}>
          {errorMessage && (
            <Grid item xs={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          )}
          <FormInput
            label="Nama Siswa"
            id="name"
            name="name"
            value={currentStudent.name || ''}
            onChange={handleChange}
            icon={<IconUser size="20" />}
            required
          />
          <GenderSelect
            id="jenis_kelamin_id"
            name="jenis_kelamin_id"
            value={currentStudent.jenis_kelamin_id || ''}
            onChange={handleChange}
            required
          />
          <DateInput
            id="tanggal_lahir"
            name="tanggal_lahir"
            value={currentStudent.tanggal_lahir || ''}
            onChange={handleDateChange}
            required
          />
          <Grid item xs={12}>
            <CustomFormLabel htmlFor="kelas_id">Pilih Kelas</CustomFormLabel>
            <CustomSelect
              id="kelas_id"
              name="kelas_id"
              value={validKelasId}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              startAdornment={<IconSchool size="20" />}
              required
            >
              <MenuItem value="">
                <em>Pilih Kelas</em>
              </MenuItem>
              {kelasOptions.map((kelas) => (
                <MenuItem key={kelas.id} value={kelas.id}>
                  {kelas.nama_kelas}
                </MenuItem>
              ))}
            </CustomSelect>
          </Grid>
          <FormInput
            label="Alamat"
            id="alamat"
            name="alamat"
            value={currentStudent.alamat || ''}
            onChange={handleChange}
            icon={<IconBrandTelegram size="20" />}
            required
          />
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', pt: 3 }}>
              <Button
                sx={{
                  mr: 2,
                  backgroundColor: "#F48C06",
                  '&:hover': { backgroundColor: "#f7a944" }
                }}
                variant="contained"
                type="submit"
              >
                Edit
              </Button>
              <Button
                sx={{
                  backgroundColor: "#2F327D",
                  '&:hover': { backgroundColor: "#63659e" }
                }}
                variant="contained"
                color="secondary"
                type="button"
                onClick={handleCancel}
              >
                Batal
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default StudentEditForm;
