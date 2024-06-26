// components/KelasTable.js

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Typography,
  CircularProgress,
} from '@mui/material';
import { IconEye, IconPencil, IconTrash } from '@tabler/icons';

const KelasTable = ({ kelas, handleEdit }) => {
  const [siswa, setSiswa] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSiswa = async (kelasId) => {
    setLoading(true);
    try {
      const response = await fetch(`/kelas/${kelasId}/siswa`);
      const data = await response.json();
      setSiswa(data);
    } catch (error) {
      console.error('Terjadi kesalahan saat mengambil data siswa:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (kelas.id) {
      fetchSiswa(kelas.id);
    }
  }, [kelas.id]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Paper variant="outlined">
      <TableContainer>
        <Table aria-label="custom pagination table" sx={{ whiteSpace: 'nowrap' }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6" sx={{ fontSize: '1rem' }}>No</Typography>
              </TableCell>
              <TableCell align='center'>
                <Typography variant="h6" sx={{ fontSize: '1rem' }}>Nama Kelas</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" sx={{ fontSize: '1rem' }}>Aksi</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={kelas.id}>
              <TableCell>
                <Typography sx={{ fontSize: '1rem' }}>1</Typography>
              </TableCell>
              <TableCell align='center'>
                <Typography sx={{ fontSize: '1rem' }}>{kelas.nama_kelas}</Typography>
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <Tooltip title="Lihat" placement="bottom">
                    <IconButton>
                      <IconEye width={20} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit" placement="bottom">
                    <IconButton onClick={() => handleEdit(kelas.id)}>
                      <IconPencil width={20} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Hapus" placement="bottom">
                    <IconButton>
                      <IconTrash width={20} />
                    </IconButton>
                  </Tooltip>
                </Box>
              </TableCell>
            </TableRow>
            {siswa.map((siswa, index) => (
              <TableRow key={siswa.id}>
                <TableCell>
                  <Typography sx={{ fontSize: '1rem' }}>{index + 2}</Typography>
                </TableCell>
                <TableCell align='center'>
                  <Typography sx={{ fontSize: '1rem' }}>{siswa.nama_siswa}</Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    {/* Tambahkan aksi tambahan untuk siswa jika diperlukan */}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

KelasTable.propTypes = {
  kelas: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default KelasTable;
