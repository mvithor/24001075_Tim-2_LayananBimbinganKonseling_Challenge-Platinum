import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Alert } from '@mui/material';
import axios from 'axios';
import PageContainer from 'src/components/container/PageContainer';
import ParentCard from 'src/components/shared/ParentCard';
import BreadcrumbKelasEdit from 'src/components/apps/kelas/kelasEdit/BreadcrumbEditKelas';
import KelasTable from 'src/components/apps/kelas/kelasList/KelasTable';
import kelasEditForm from 'src/components/apps/kelas/kelasEdit/KelasEdit';

const KelasEdit = () => {
    const [kelasList, setKelasList] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selectedKelasId, setSelectedKelasId] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
  
    const fetchKelasList = async () => {
      try {
        const response = await axios.get('http://localhost/api/kelas');
        setKelasList(response.data);
      } catch (error) {
        console.error('Error fetching kelas list:', error);
      }
    };
  
    useEffect(() => {
      fetchKelasList();
    }, []);
  
    const handleEdit = (kelasId) => {
      setSelectedKelasId(kelasId);
      setIsEditing(true);
    };
  
    const handleSave = () => {
      fetchKelasList();
      setIsEditing(false);
    };
  
    const handleCancel = () => {
      setIsEditing(false);
    };
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Daftar Kelas
        </Typography>
        {isEditing ? (
          <KelasEditForm
            kelasId={selectedKelasId}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          <Box mt={2}>
            <KelasTable
              kelas={kelasList}
              page={page}
              rowsPerPage={rowsPerPage}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
              handleEdit={handleEdit}
              handleDetail={(kelasId) => console.log(`Detail Kelas ID: ${kelasId}`)}
              handleDelete={(kelasId) => console.log(`Delete Kelas ID: ${kelasId}`)}
            />
          </Box>
        )}
      </Container>
    );
  };
  
  export default KelasEdit;