import axios from 'axios';

const getManagers = async () => {
    const res = await axios.get('http://localhost:3000/api/admin/getAllManagers')
    return res
}

export {getManagers} 