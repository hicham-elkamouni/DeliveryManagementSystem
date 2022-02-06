import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../Redux/store";
import * as Yup from "yup"
import { login } from '../../Services/login';
import { userData } from '../../Redux/features/auth/userSlice';
import { useLocation, useNavigate } from 'react-router-dom';


function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Maroc Ship
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const CreateManager: React.FC = () => {

    let navigate = useNavigate();


    let dispatch = useDispatch()

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
        onSubmit: async (values: any) => {
            //actor from param
            
            console.log(values);
            

        }
    }

    )

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        {/* <LockOutlinedIcon /> */}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="username"

                            autoComplete="username"
                            {...formik.getFieldProps('username')}
                            autoFocus
                        />
                        {formik.touched.username && formik.errors.username ? <div className="text-red-400 ">{formik.errors.username}</div> : null}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"

                            autoComplete="email"
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
                            autoComplete="current-password"
                        />
                        {formik.touched.password && formik.errors.password ? <div className="text-red-400 ">{formik.errors.password}</div> : null}
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Create Manager
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
export default CreateManager

function userFormik() {
    throw new Error('Function not implemented.');
}
