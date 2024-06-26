import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import {
  Typography,
  TableHead,
  Box,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  TableFooter,
  IconButton,
  Paper,
  TableContainer,
  TextField,
  Alert
} from '@mui/material';

import { useNavigate } from 'react-router';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import { IconPencil, IconTrash } from '@tabler/icons';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import ParentCard from 'src/components/shared/ParentCard';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const BCrumb = [
  {
    to: '/dashboard',
    title: 'Dashboard',
  },
  {
    title: 'Data Konselor',
  },
];

const KonselorList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [konselor, setKonselor] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchKonselor = async () => {
      try {
        const response = await axios.get('http://localhost:4000/konselor');
          setKonselor(response.data);
        
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
    fetchKonselor();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredKonselor = Array.isArray(konselor)
    ? konselor.filter((konselor) =>
        konselor.nama.toLowerCase().includes(searchQuery.toLowerCase())
      ).sort((a, b) => a.nama.localeCompare(b.nama))
    : [];

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredKonselor.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/admin/konselor/edit/${id}`);
  };

  const ColorAlerts = ({ message }) => {
    return (
      <Alert severity="error">
        {message}
      </Alert>
    );
  };

  return (
    <PageContainer title="Data Konselor" description="Data Konselor">
      <Breadcrumb title="Data Konselor" items={BCrumb} />
      <Box justifyContent={'center'} mb={5}>
        {error && <ColorAlerts message={error} />}
      </Box>
      <ParentCard title="Data Konselor">
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
        <Paper variant="outlined">
          <TableContainer>
            <Table
              aria-label="custom pagination table"
              sx={{
                whiteSpace: 'nowrap',
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6" sx={{ fontSize: '1rem' }}>No</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" sx={{ fontSize: '1rem' }}>Nama</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" sx={{ fontSize: '1rem' }}>Email</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" sx={{ fontSize: '1rem' }}>Bidang</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" sx={{ fontSize: '1rem' }}>Telepon</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" sx={{ fontSize: '1rem' }}>Status</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="h6" sx={{ fontSize: '1rem' }}>Aksi</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? filteredKonselor.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : filteredKonselor
                ).map((konselor, index) => (
                  <TableRow key={konselor.id}>
                    <TableCell>
                      <Typography sx={{ fontSize: '1rem' }}>{page * rowsPerPage + index + 1}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: '1rem' }}>{konselor.nama}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: '1rem' }}>{konselor.email}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: '1rem' }}>{konselor.bidang}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: '1rem' }}>{konselor.nomor_telepon}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: '1rem' }}>{konselor.status_aktif ? 'Aktif' : 'Tidak Aktif'}</Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <IconButton>
                          <IconTrash width={18} />
                        </IconButton>
                        <IconButton onClick={() => handleEdit(konselor.id)}>
                          <IconPencil width={18} />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={7} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={7}
                    count={filteredKonselor.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        'aria-label': 'rows per page',
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Paper>
      </ParentCard>
    </PageContainer>
  );
};

export default KonselorList;
