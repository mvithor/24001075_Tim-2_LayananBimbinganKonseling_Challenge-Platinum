import React, { useState, useEffect } from "react";
import { Grid, Box, Button, TextField } from '@mui/material';


const KelasEditForm = ({ kelas, handleChange, handleSubmit, handleCancel }) => {
  const [kelasData, setKelasData] = useState(kelas);

  useEffect(() => {
    setKelasData(kelas);
  }, [kelas]);

  const onChange = (event) => {
    setKelasData({
      ...kelasData,
      [event.target.name]: event.target.value
    });
    handleChange(event);
  };

  return (
    <Box component="form" onSubmit={(event) => handleSubmit(event, kelasData)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nama Kelas"
            name="nama_kelas"
            value={kelasData.nama_kelas || ''}
            onChange={onChange}
            variant="outlined"
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
  );
};

export default KelasEditForm;
