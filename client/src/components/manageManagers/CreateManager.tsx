import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../Redux/store";
import * as Yup from "yup"
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import CreateBtn from '../../layouts/buttons/CreateBtn';




const theme = createTheme();

const CreateManager: React.FC = () => {

    function redirect(): void {
        navigate("/dashboard/admin/manageManagers/read", { replace: true });
      }

    let navigate = useNavigate();

    let dispatch = useDispatch()

    // ! GET TOKEN FROM STORE
    let token = useSelector((state : RootState)=> state.user.token);

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().min(8, 'username must be more than 5 characters').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(5, 'Must be 5 characters or more').required('Required'),
        }),
        enableReinitialize: true,
        onSubmit: (values: any) => {
            
            
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
                    let res = axios.post("http://localhost:3000/api/admin/createManager", values, config).then(res=>{
                        navigate("/dashboard/admin/manageManagers/read", { replace: true });        

                    }).catch((err)=>{

                        console.error(err);
                    })
               
               

        }
    }

    )

    return (
        
        <ThemeProvider theme={theme}>
                <div className="mb-6" onClick={() => redirect()}>
      <CreateBtn name="Back"/>
    </div>
            <Container component="main" maxWidth="xs">

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                        <Typography variant="h4" gutterBottom component="div">
                            Create Manager
                        </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="username"
                            {...formik.getFieldProps('username')}
                            autoFocus
                            autoComplete="off"
                        />
                        {formik.touched.username && formik.errors.username ? <div className="text-red-400 ">{formik.errors.username}</div> : null}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            {...formik.getFieldProps('email')}
                            autoFocus
                        />
                        {formik.touched.email && formik.errors.email ? <div className="text-red-400 ">{formik.errors.email}</div> : null}
                        <TextField
                            margin="normal"
                            required
                            fullWidth

                            label="Password"
                            type="password"
                            id="password"
                            {...formik.getFieldProps('password')}
                            
                        />
                        {formik.touched.password && formik.errors.password ? <div className="text-red-400 ">{formik.errors.password}</div> : null}
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>

                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}
export default CreateManager

function userFormik() {
    throw new Error('Function not implemented.');
}
