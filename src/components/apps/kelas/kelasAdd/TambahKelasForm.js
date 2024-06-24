import React, { useState } from "react";
import axiosInstance from "src/utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Button,
  InputAdornment
} from "@mui/material";
import CustomFormLabel from "src/components/forms/theme-elements/CustomFormLabel";
import CustomOutlinedInput from "src/components/forms/theme-elements/CustomOutlinedInput";
import { IconSchool } from '@tabler/icons'; 

const TambahKelasForm = ({ setSuccess, setError }) => {
  const [namaKelas, setNamaKelas] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setNamaKelas(event.target.value);
  };

  const handleCancel = () => {
    navigate(-1); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosInstance.post("/kelas/tambah-kelas", {
        nama_kelas: namaKelas
      });
      setSuccess("Kelas berhasil ditambahkan!");
      setError(""); 
      setNamaKelas(""); 
      setTimeout(() => navigate("/dashboard/admin/kelas"), 2000);
    } catch (error) {
      const errorMessage = error.response && error.response.data && error.response.data.msg
        ? error.response.data.msg
        : "Terjadi kesalahan saat menambah kelas";
      setError(errorMessage);
      setSuccess(""); 
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <CustomFormLabel htmlFor="namaKelas" sx={{ mt: 0, mb: 1 }}>
              Nama Kelas
            </CustomFormLabel>
          </Box>
          <CustomOutlinedInput
            startAdornment={<InputAdornment position="start"><IconSchool /></InputAdornment>}
            id="namaKelas"
            name="namaKelas"
            value={namaKelas}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
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
              Simpan
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
      </form>
    </Box>
  );
};

export default TambahKelasForm;
