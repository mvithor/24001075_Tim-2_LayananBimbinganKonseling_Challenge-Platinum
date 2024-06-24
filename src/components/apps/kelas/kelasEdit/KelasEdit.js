import React, { useState, useEffect } from "react";
import { Grid, Box, Button, MenuItem } from '@mui/material';
import { IconSchool } from '@tabler/icons';
import axios from "axios";

const kelasEditForm = ({kelasId, onSave, onCancel }) => {
    const [kelasData, setKelasData] = useState({
        nama_kelas: ''
    });

    useEffect(() => {
        const fetchKelasData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/kelas/${kelasId}`);
                setKelasData(response.data)
            } catch (error) {
                console.error('Error fetching kelas data:', error);
            }
        };
        if (kelasId) {
            fetchKelasData();
        }
    }, [kelasId]);

    const handleChange = (event) => {
        setKelasData({
          ...kelasData,
          [event.target.name]: event.target.value
        });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.put(`http://localhost:4000/kelas/${kelasId}`, kelasData);
          onSave();
        } catch (error) {
          console.error('Error updating kelas data:', error);
        }
      };
      return (
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nama Kelas"
                name="nama_kelas"
                value={kelasData.nama_kelas}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={<IconSchool />}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={onCancel}
                  style={{ marginLeft: '8px' }}
                >
                  Cancel
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      );
};
export default kelasEditForm;
