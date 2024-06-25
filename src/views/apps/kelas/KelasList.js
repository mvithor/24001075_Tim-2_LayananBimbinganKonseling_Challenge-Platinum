import React, { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "src/utils/axiosInstance";
import { useNavigate } from "react-router";
import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogContent,
  Typography,
  DialogActions,
  Alert
} from "@mui/material";
import { IconPlus } from "@tabler/icons";
import BreadcrumbKelas from "src/components/apps/kelas/kelasList/BreadcrumbKelasList";
import PageContainer from "src/components/container/PageContainer";
import ParentCard from "src/components/shared/ParentCard";
import KelasTable from "src/components/apps/kelas/kelasList/KelasTable";


const KelasList = () => {
  const [page, SetPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [kelas, SetKelas] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [deleteKelasId, setDeleteKelasId] = useState(null); 
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchKelas = async () => {
      try {
        const response = await axiosInstance.get("/kelas");
        SetKelas(response.data);
      } catch (error) {
        if (error.response && error.response.data && error.response.data.msg) {
          console.log(error.response.data);
          setError(error.response.data.msg);
        } else {
          console.error("Terjadi kesalahan:", error.message);
          setError("Terjadi kesalahan saat memuat data");
        }
      }
    };
    fetchKelas();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredKelas = kelas
    .filter((kelas) =>
      kelas.nama_kelas.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.nama_kelas.localeCompare(b.nama_kelas));

  const handleChangePage = (event, newPage) => {
    SetPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    SetPage(0);
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/admin/kelas/edit/${id}`);
  };

  const handleAddKelas = () => {
    navigate("/dashboard/admin/kelas/tambah-kelas");
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/kelas/${id}`);
      SetKelas(kelas.filter(kelas => kelas.id !== id));
      setConfirmDialogOpen(false); 
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus data kelas:', error.message);
      setError('Terjadi kesalahan saat menghapus data kelas');
    }
  };

  const handleDetail = () => {
    navigate("/dashboard/admin/kelas/KelasId");
  };

  const handleOpenConfirmDialog = (id) => {
    setDeleteKelasId(id);
    setConfirmDialogOpen(true);
  };
  const handleCloseConfirmDialog = () => {
    setConfirmDialogOpen(false);
  };

  const ColorAlerts = ({ message }) => {
    return (
      <Alert severity="error">
        {message}
      </Alert>
    );
  };

  return (
    <PageContainer title="Data Kelas" description="Data Kelas">
      <BreadcrumbKelas/>
      <Box justifyContent={"center"} mb={5}>
        {error && <ColorAlerts message={error} />}
      </Box>
      <ParentCard title="Data Kelas">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <TextField
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              sx: { padding: "4px" },
            }}
            sx={{ flexGrow: 0, marginRight: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<IconPlus />}
            onClick={handleAddKelas}
          >
            Tambah Kelas
          </Button>
        </Box>

        <KelasTable
          kelas={filteredKelas}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleEdit={handleEdit}
          handleDetail={handleDetail}
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
            Apakah Anda yakin ingin menghapus nama kelas?. Menghapus nama kelas akan menghapus data siswa yang ada dikelas tersebut
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
           onClick={() => handleDelete(deleteKelasId)}>
            Hapus
          </Button>
        </DialogActions>
      </Dialog>


    </PageContainer>
  );
};

export default KelasList;
