import React, { useState, useEffect } from 'react';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, TableFooter, TablePagination } from '@mui/material';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ParentCard from '../../../components/shared/ParentCard';
import axios from 'axios';

// import TablePaginationActions from './TablePaginationActions';

const BCrumb = [
  {
    to: '/dashboard',
    title: 'Dashboard',
  },
  {
    title: 'Data Konselor',
  },
];


const PaginationTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [konselor, setKonselor] = useState([]);

  useEffect(() => {
    const fetchKonselor = async () => {
      try {
        const response = await axios.get('http://localhost:4000/data-konselor');
        setKonselor(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchKonselor();
  }, []);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - konselor.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper variant="outlined">
      <TableContainer>
        <Table aria-label="custom pagination table" sx={{ whiteSpace: 'nowrap' }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">No.</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Nama</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Email</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Bidang</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Telepon</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Status</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? konselor.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : konselor
            ).map((konselor, index) => (
              <TableRow key={konselor.id}>
                <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                <TableCell>{konselor.nama}</TableCell>
                <TableCell>{konselor.email}</TableCell>
                <TableCell>{konselor.bidang}</TableCell>
                <TableCell>{konselor.nomor_telepon}</TableCell>
                <TableCell>{konselor.status_aktif ? 'Aktif' : 'Tidak Aktif'}</TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={6}
                count={konselor.length}
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
                // ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
};

const Konselor = () => {
  return (
    <PageContainer title="Data Konselor" description="Data Konselor">
      <Breadcrumb title="Data Konselor" items={BCrumb} />
      <ParentCard title="Data Konselor">
        <PaginationTable />
      </ParentCard>
    </PageContainer>
  );
};

export default Konselor;
