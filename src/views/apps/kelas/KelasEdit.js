import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Alert } from '@mui/material';
import axiosInstance from 'src/utils/axiosInstance';
import PageContainer from 'src/components/container/PageContainer';
import ParentCard from 'src/components/shared/ParentCard';
import BreadcrumbKelasEdit from 'src/components/apps/kelas/kelasEdit/BreadcrumbEditKelas';
import KelasEditForm from 'src/components/apps/kelas/kelasEdit/KelasEdit';

const KelasEdit = () => {
  const { id } = useParams();
  const [kelas, setKelas] = useState({
    nama_kelas: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
    
  const fetchKelasById = async (id) => {
    try {
      const response = await axiosInstance.get(`/kelas/${id}`);
      setKelas(response.data);
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
    fetchKelasById(id);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKelas((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e, updatedKelas) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/kelas/${id}`, updatedKelas);
      setSuccess('Data Kelas Berhasil di Perbarui');
      setTimeout(() => {
        navigate('/dashboard/admin/kelas');
      }, 3000);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        console.log(error.response.data);
        setError(error.response.data.msg);
      } else {
        console.error('Terjadi kesalahan:', error.message);
        setError('Terjadi kesalahan saat memuat data');
      }
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <PageContainer>
      <BreadcrumbKelasEdit/>
      <Box justifyContent={'center'} mb={3}>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
      </Box>
      <ParentCard title="Form Edit Kelas">
        <KelasEditForm
          kelas={kelas}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          error={error}
          success={success}
        />
      </ParentCard>
    </PageContainer>
  );
};

export default KelasEdit;
