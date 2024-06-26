import React, { useState,useEffect} from 'react';
import axiosInstance from "src/utils/axiosInstance";
import { Grid, Box, Button, Alert, MenuItem, InputAdornment } from '@mui/material';
// import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import { IconUser,IconGenderAgender} from '@tabler/icons';
import CustomFormLabel from "src/components/forms/theme-elements/CustomFormLabel";
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomOutlinedInput from "src/components/forms/theme-elements/CustomOutlinedInput";
// import DateInput from './DateInput';
import FormInput from './FormInput';
// import GenderSelect from './GenderSelect';
// import axiosInstance from 'src/utils/axiosInstance';
// import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';

const PelanggaranEditForm = ({ pelanggaran, handleChange, handleSubmit, handleCancel }) => {
  // const [kelasOptions, setKelasOptions] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [genderOptions, setGenderOptions] = useState([]);
  useEffect(() => {
    const fetchGenderOptions = async () => {
      try {
        const response = await axiosInstance.get('/users/jenis-kelamin');
        setGenderOptions(response.data);
      } catch (error) {
        console.error("Error fetching gender options:", error);
      }
    };


    fetchGenderOptions();

  }, []);

  // useEffect(() => {
  //   const fetchKelasOptions = async () => {
  //     try {
  //       const response = await axiosInstance.get('/kelas');
  //       setKelasOptions(response.data);
  //     } catch (error) {
  //       console.error("Error fetching kelas options:", error);
  //     }
  //   };

  //   fetchKelasOptions();
  // }, []);

  if (!pelanggaran) {
    return null;
  }

  const initialPelanggaran = {
    nama_siswa: '',
    jenis_kelamin: '',
    waktu: '',
    peristiwa: '',
    tempat: '',
    informan: '',
    bidang_bimbingan: ''
  };

  const currentPelanggaran = { ...initialPelanggaran, ...pelanggaran };
 
  // const validKelasId = kelasOptions.some(kelas => kelas.id === currentPelanggaran.kelas_id) ? currentPelanggaran.kelas_id : '';
  console.log('data:',pelanggaran )
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !currentPelanggaran.nama_siswa || 
      !currentPelanggaran.jenis_kelamin || 
      !currentPelanggaran.waktu || 
      !currentPelanggaran.peristiwa || 
      !currentPelanggaran.tempat || 
      !currentPelanggaran.informan || 
      !currentPelanggaran.bidang_bimbingan
    ) {
      setErrorMessage("Semua form harus diisi.");
      return;
    }

    setErrorMessage('');
    handleSubmit(e);
  };

  return (
    // <form onSubmit={handleFormSubmit}>
    //   <Box sx={{ p: 3, bgcolor: 'background.paper', boxShadow: 2 }}>
    //     <Grid container spacing={3}>
    //       {errorMessage && (
    //         <Grid item xs={12}>
    //           <Alert severity="error">{errorMessage}</Alert>
    //         </Grid>
    //       )}
    //       <FormInput
    //         label="Nama Siswa"
    //         id="nama_siswa"
    //         name="nama_siswa"
    //         value={currentPelanggaran.nama_siswa || ''}
    //         onChange={handleChange}
    //         icon={<IconUser size="20" />}
            
    //       />
          <Box>
      <form onSubmit={handleSubmit}>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <CustomFormLabel htmlFor="nama_siswa" sx={{ mt: 0, mb: 1 }}>
              Nama Siswa
            </CustomFormLabel>
          </Box>
          <CustomOutlinedInput
            startAdornment={<InputAdornment position="start"><IconUser /></InputAdornment>}
            id="nama_siswa"
            name="nama_siswa"
            value={currentPelanggaran.nama_siswa || ''}
            onChange={handleChange}
            fullWidth
          />
          {/* <FormInput
            label="Jenis Kelamin"
            id="jenis_kelamin"
            name="jenis_kelamin"
            value={currentPelanggaran.jenis_kelamin || ''}
            onChange={handleChange}
            icon={<IconUser size="20" />}
            required
          /> */}
          {/* gender dropdown */}
          <Box display="flex" alignItems="center">
          <CustomFormLabel htmlFor="jenisKelamin" sx={{ mt: 2, mb: 1}} fullWidth >
              Jenis Kelamin
            </CustomFormLabel>
            </Box>
            
          <CustomSelect
          startAdornment={<InputAdornment position="start"><IconGenderAgender /></InputAdornment>}
            id="jenis_kelamin"
            name="jenis_kelamin"
            value={currentPelanggaran.jenis_kelamin || ''}
            onChange={handleChange}
            fullWidth
            variant="outlined"      
          >
            {genderOptions.map((genderOption) => (
              <MenuItem key={genderOption.id} value={genderOption.jenis_kelamin}>
                {genderOption.jenis_kelamin}
              </MenuItem>
            ))}
          </CustomSelect>
          
          <FormInput
            label="Waktu Kejadian"
            id="waktu"
            name="waktu"
            value={currentPelanggaran.waktu || ''}
            onChange={handleChange}
            icon={<IconUser size="20" />}
            required
          />
          <FormInput
            label="Peristiwa"
            id="peristiwa"
            name="peristiwa"
            value={currentPelanggaran.peristiwa || ''}
            onChange={handleChange}
            icon={<IconUser size="20" />}
            required
          />
          <FormInput
            label="Tempat"
            id="tempat"
            name="tempat"
            value={currentPelanggaran.tempat || ''}
            onChange={handleChange}
            icon={<IconUser size="20" />}
            required
          />
          <FormInput
            label="Informan"
            id="informan"
            name="informan"
            value={currentPelanggaran.informan || ''}
            onChange={handleChange}
            icon={<IconUser size="20" />}
            required
          />
          <FormInput
            label="Bidang Bimbingan"
            id="bidang_bimbingan"
            name="bidang_bimbingan"
            value={currentPelanggaran.bidang_bimbingan || ''}
            onChange={handleChange}
            icon={<IconUser size="20" />}
            required
          />
          {/* <GenderSelect
            id="jenis_kelamin_id"
            name="jenis_kelamin_id"
            value={currentPelanggaran.jenis_kelamin_id || ''}
            onChange={handleChange}
            required
          />
          <DateInput
            id="tanggal_lahir"
            name="tanggal_lahir"
            value={currentPelanggaran.tanggal_lahir || ''}
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
            value={currentPelanggaran.alamat || ''}
            onChange={handleChange}
            icon={<IconBrandTelegram size="20" />}
            required
          /> */}
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
      </form>
    </Box>
  );
};

export default PelanggaranEditForm;
