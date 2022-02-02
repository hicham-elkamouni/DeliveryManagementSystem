import { useEffect, useState } from 'react';
import axios from 'axios';

interface Manager {
  email: string,
  role : string,
  username : string
}

interface DataManager {
  data : Manager[]
}


const useFetch = (url : string) => {

    const [data, setData] = useState([] as unknown  as DataManager)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(()=> {

      axios.get(url)
      .then( (res) =>{
        setData(res.data.message)
        setIsPending(false)
      })
      .catch((err) =>{
        setError(err)
      })
    
    },[url])

    return { data , error , isPending }
    
};

export default useFetch;
