import React from 'react';
import {
  Box,
  Typography,
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableFooter,
  TableHead,
  TableRow,
  IconButton,
  Paper,
} from '@mui/material';
import PropTypes from 'prop-types';
import { IconEye, IconPencil, IconTrash } from '@tabler/icons';
import TablePaginationActions from '../../siswa/siswaList/TablePaginationAction';

const KelasTable = ({ 
    kelas, 
    page, 
    rowsPerPage, 
    handleChangePage,
    handleChangeRowsPerPage,
    handleEdit,
    handleDetail,
    handleDelete }) => {
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - kelas.length) : 0;

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
            {(rowsPerPage > 0
              ? kelas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : kelas
            ).map((kelasItem, index) => (
              <TableRow key={kelasItem.id}>
                <TableCell>
                  <Typography sx={{ fontSize: '1rem' }}>{page * rowsPerPage + index + 1}</Typography>
                </TableCell>
                <TableCell align='center'>
                  <Typography sx={{ fontSize: '1rem' }}>{kelasItem.nama_kelas}</Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Tooltip title="Lihat" placement="bottom">
                      <IconButton onClick={() => handleDetail(kelasItem.id)}>
                        <IconEye width={20} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit" placement="bottom">
                      <IconButton onClick={() => handleEdit(kelasItem.id)}>
                        <IconPencil width={20} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Hapus" placement="bottom">
                      <IconButton onClick={() => handleDelete(kelasItem.id)}>
                        <IconTrash width={20} />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={3} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={kelas.length}
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
  );
};

KelasTable.propTypes = {
  kelas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nama_kelas: PropTypes.string.isRequired,
    })
  ).isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDetail: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default KelasTable;
