import {FC, useEffect, useState} from 'react';
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
  
  const [ data , setData ] = useState<Manager[]>([]);

  const { error , isPending } = useFetch("http://localhost:3000/api/admin/getAllManagers", setData);

  useEffect(() => {
    console.log("this is data :", data)
  },[data])
  
  return <div>
    <h1> readmanagers </h1>
      
      <Table data={data}/>
    
        </div>;
};

export default ReadManagers;
