

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DeleteUserDialog from './dialogs/DeleteUserDialog';



interface Column {
  id: 'username' | 'email' | 'createdAt' | 'updatedAt' | 'actions';
  label: string;

}

interface data {
  _id: string;
  username?: string;
  email?: string;
  updatedAt?: string;
  createdAt?: string;
  actions?: string;
}

interface Props {
  data: data[]
  columns: Column[],
  refetch : any
}


const TableData: React.FC<Props> = ({ data, columns: headers, refetch }) => {
  // columns => table headers
  const columns: readonly Column[] = headers.map(e => e);
  // rows => data
  let rows: data[] = data.map((row) => row)
  // paginationation
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  // MODAL STATE
  const [open, setOpen] = useState(false)
  // GET MANAGER ID TO PASS IN DELETE MODAL
  const [managerId , setManagerId] = useState('')
  const [response , setResponse] = useState('')
  
  const openDeleteModal = async (id:string) =>{
    console.log(id)
    setManagerId(id)
    setOpen(!open)
    
  }

  return (<>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id}   >
                          {column.id == "actions" ?
                            <>
                              <Button onClick={()=>openDeleteModal(row._id)} variant="outlined" >
                                <DeleteIcon />
                              </Button>
                              <Button  variant="outlined" >
                                <EditIcon />
                              </Button>
                            </> : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper >
    {  <DeleteUserDialog setOpen={setOpen} open={open} managerId={managerId} refetch={refetch} />}
    </>
  );
};

export default TableData;