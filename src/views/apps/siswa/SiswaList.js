import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, TextField, Alert, Typography, Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PageContainer from 'src/components/container/PageContainer';
import ParentCard from 'src/components/shared/ParentCard';
import BreadcrumbComponent from 'src/components/apps/siswa/siswaList/BreadcrumbSiswa';
import StudentTable from 'src/components/apps/siswa/siswaList/StudentTable';

const StudentsList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  const [deleteStudentId, setDeleteStudentId] = useState(null); 
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
        setError('Terjadi kesalahan saat memuat data');
      }
    };

    const fetchClasses = async () => {
      try {
        const response = await axios.get('http://localhost:4000/kelas/nama-kelas');
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchStudents();
    fetchClasses();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/admin/siswa/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/students/${id}`);
      setStudents(students.filter(student => student.id !== id));
      setConfirmDialogOpen(false); 
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus data siswa:', error.message);
      setError('Terjadi kesalahan saat menghapus data siswa');
    }
  };

  const handleOpenConfirmDialog = (id) => {
    setDeleteStudentId(id);
    setConfirmDialogOpen(true);
  };

  const handleCloseConfirmDialog = () => {
    setConfirmDialogOpen(false);
  };

  const studentsWithClassNames = students.map(student => {
    const studentClass = classes.find(cls => cls.id === student.kelas_id);
    return {
      ...student,
      kelas_nama: studentClass ? studentClass.nama_kelas : 'Tidak Diketahui',
    };
  });

  const filteredStudents = studentsWithClassNames
    .filter((student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const ColorAlerts = ({ message }) => {
    return (
      <Alert severity="error">
        {message}
      </Alert>
    );
  };

  return (
    <PageContainer title="Data Siswa" description="Data Siswa">
      <BreadcrumbComponent />
      <Box justifyContent={'center'} mb={5}>
        {error && <ColorAlerts message={error} />}
      </Box>
      <ParentCard title="Data Siswa">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <TextField
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              sx: { padding: '4px' },
            }}
          />
        </Box>
        <StudentTable
          students={filteredStudents}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={setPage}
          handleChangeRowsPerPage={setRowsPerPage}
          handleEdit={handleEdit}
          handleDelete={handleOpenConfirmDialog} 
        />
      </ParentCard>

       {/* Dialog Konfirmasi Hapus */}
       <Dialog
        open={confirmDialogOpen}
        onClose={handleCloseConfirmDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent>
          <Typography variant="h5" align="center" sx={{ mt: 2, mb: 2 }}>
            Apakah Anda yakin ingin menghapus data siswa?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', mb: 2 }}>
          <Button 
            sx={{mr:3}}
          
            variant="outlined" 
            color="secondary" onClick={handleCloseConfirmDialog}>
            Batal
          </Button>
          <Button 
            sx={{
              mr: 3,
              backgroundColor: "#F48C06",
              '&:hover': { backgroundColor: "#f7a944" }
            }}
           variant="contained" 
           onClick={() => handleDelete(deleteStudentId)}>
            Hapus
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
};

export default StudentsList;
