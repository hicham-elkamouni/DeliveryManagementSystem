import { Typography } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import CreateBtn from '../../layouts/buttons/CreateBtn';
import TableData from '../../layouts/TableData'
import useFetch from '../../Services/Utils/useFetch'
interface Column {
  id: 'username' | 'email' | 'createdAt' | 'updatedAt';
  label: string;
}

const ReadManagers: FC = () => {


  const [data, setData] = useState([]);

  const { error, isPending } = useFetch("http://localhost:3000/api/admin/getAllManagers", setData);


  const columns: Column[] = [
    { id: 'username', label: 'User Name' },
    { id: 'email', label: 'Email' },
    { id: 'createdAt', label: 'Created At' },
    { id: 'updatedAt', label: 'Updated At' },
  ]
  return <div>
    <div className="mb-6" onClick={() => console.log('e')}>

    <CreateBtn/>
    </div>
    <Typography variant="h4" gutterBottom component="div">
      Managers
    </Typography>

    <div className="mt-6">

      {data && <TableData data={data} columns={columns} />}
    </div>
  </div>;
};


export default ReadManagers;