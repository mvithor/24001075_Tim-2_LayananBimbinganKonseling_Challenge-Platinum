import React, { useState, useEffect } from 'react';
import { Grid, Box, Button, MenuItem } from '@mui/material';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import { IconUser, IconSchool, IconBrandTelegram } from '@tabler/icons';
import DateInput from './DateInput';
import FormInput from './FormInput';
import GenderSelect from './GenderSelect';
import axios from 'axios';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';

const StudentEditForm = ({ student, handleChange, handleDateChange, handleSubmit, handleCancel }) => {
  const [kelasOptions, setKelasOptions] = useState([]);

  useEffect(() => {
    // Fetch kelas options from backend
    const fetchKelasOptions = async () => {
      try {
        const response = await axios.get('http://localhost:4000/kelas'); // Sesuaikan dengan endpoint backend Anda
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

  // Pastikan student.kelas_id selalu memiliki nilai
  const initialStudent = {
    name: '',
    jenis_kelamin_id: '',
    tanggal_lahir: '',
    kelas_id: '',
    alamat: ''
  };

  // Gunakan nilai student untuk inisialisasi form
  const currentStudent = { ...initialStudent, ...student };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ p: 3, bgcolor: 'background.paper', boxShadow: 2 }}>
        <Grid container spacing={3}>
          <FormInput
            label="Nama Siswa"
            id="name"
            name="name"
            value={currentStudent.name || ''}
            onChange={handleChange}
            icon={<IconUser size="20" />}
          />
          <GenderSelect
            id="jenis_kelamin_id"
            name="jenis_kelamin_id"
            value={currentStudent.jenis_kelamin_id || ''}
            onChange={handleChange}
          />
          <DateInput
            id="tanggal_lahir"
            name="tanggal_lahir"
            value={currentStudent.tanggal_lahir || ''}
            onChange={handleDateChange}
          />
          <Grid item xs={12}>
            <CustomFormLabel htmlFor="kelas_id">Pilih Kelas</CustomFormLabel>
            <CustomSelect
              id="kelas_id"
              name="kelas_id"
              value={currentStudent.kelas_id || ''}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              startAdornment={<IconSchool size="20" />}
            >
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
