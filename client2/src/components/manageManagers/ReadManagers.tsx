import {FC} from 'react';
import Table from '../../layouts/Table'
import useFetch from '../../Services/Utils/useFetch'

interface Manager {
  email: string,
  role : string,
  username : string
}

interface DataManager {
  data : Manager[]
}

const ReadManagers:FC = () => {

  const { data, error , isPending } = useFetch("http://localhost:3000/api/admin/getAllManagers");

  if (!isPending){
    console.log("this is data :", data as DataManager)
  }

  console.log("this is error :",error)

  return <div>readmanagers
          {/* <Table data={data}/> */}
        </div>;
};

export default ReadManagers;
