import { Typography } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CreateBtn from '../../layouts/buttons/CreateBtn';
import TableData from '../../layouts/TableData'
import useFetch from '../../Services/Utils/useFetch'
interface Column {
  id: 'username' | 'email' | 'createdAt' | 'updatedAt' | 'actions';
  label: string;
}

const ReadManagers: FC = () => {

  let navigate = useNavigate();

  const { data ,error, isPending, setData:refetch } = useFetch("http://localhost:3000/api/admin/getAllManagers");

  function redirect(): void {
    navigate("/dashboard/admin/manageManagers/create", { replace: true });
  }

  const columns: Column[] = [
    { id: 'username', label: 'User Name' },
    { id: 'email', label: 'Email' },
    { id: 'createdAt', label: 'Created At' },
    { id: 'updatedAt', label: 'Updated At' },
    { id: 'actions', label: 'actions' },
  ]
  return <div>
    <div className="mb-6" onClick={() => redirect()}>
      <CreateBtn name="create" />
    </div>
    <Typography variant="h4" gutterBottom component="div">
      Managers
    </Typography>

    <div className="mt-6">

      {data && <TableData data={data} columns={columns} refetch={refetch} />}
    </div>
  </div>;
};

export default ReadManagers;
