import axios from "axios"

interface User {
    email: string
    password: string
    token?: string;
    role?: string;
    username?: string;
}
const adminLogin = async (user: User) => {
   const res = await axios.post('http://localhost:3000/api/admin/login', {
        email: user.email,
        password: user.password
    })
  return res

}
export {adminLogin} 


// const UseFeth = (url) => {
//     const [data , setData] = useState()

//     useEffect(() => {
//         const res = await 
//     },[url])
// return data
// } 


// const {data } = UseFeth(url)