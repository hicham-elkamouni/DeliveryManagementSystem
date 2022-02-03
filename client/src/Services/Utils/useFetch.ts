import { useEffect, useState } from 'react';
import axios from 'axios';


const useFetch = (url : string, setData:Function) => {

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

    return { error , isPending }
    
};

export default useFetch;
