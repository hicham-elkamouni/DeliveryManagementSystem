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
import { useLocation, useNavigate, useParams } from 'react-router-dom';


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

const LoginForm: React.FC = () => {
    // const role = useLocation().pathname
    let { actor } = useParams()
    let navigate = useNavigate();


    let dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            password: Yup.string().min(5, 'Must be 5 characters or more').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required')
        }),
        enableReinitialize: true,
        onSubmit: async (values: any) => {
            //actor from param
            values.role = actor
            console.log(values);
            await login(values).then((res) => {
                const role = res?.data?.doc?.role
                if (!role) {
                    // isAdmin
                    navigate("../dashboard/admin/manageManagers/read", { replace: true });

                } else if (role == "MANAGER") {
                    console.log("MANAGER")

                } else if (role == "DELIVERY_MANAGER") {
                    console.log("DELIVERY_MANAGER")

                } else if (role == "DRIVER") {
                    console.log("DRIVER")

                }
                dispatch(userData({
                    token: res.data.token,
                    role: role ? role : "ADMIN",

                }))
            }
            ).catch((err) => {
                console.log(err)
            })
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
export default LoginForm

function userFormik() {
    throw new Error('Function not implemented.');
}
