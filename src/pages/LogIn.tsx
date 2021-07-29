import {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

import {Formik} from 'formik'
import * as Yup from 'yup'
import { NONAME } from 'dns';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  bgStyle: {
    backgroundImage: 'linear-gradient(91.07deg, rgba(66,227,230,0.34) 0%, rgba(255,255,255,0) 100%), linear-gradient(135deg, #42E697 0%, #4291E6 100%)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down("sm")]: {
        display: 'none',
      },
  },
  leftContent: {
    padding: theme.spacing(6, 7),
    flexDirection: 'inherit',
    backgroundSize: '80%',
    backgroundImage: 'url(https://business-assets.taygo.tech/Graphics-side@3x.c2dc13d818ac3019678307642a71d2b7.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'right',
    backgroundPositionY: '11.5vh',
    height: '100%',
    display: 'inherit',
    minHeight: '100vh'
  },
  logo: {
      height: '50px',
      marginBottom: '8.5%'
  },
  leftText: {
    fontSize: '35px',
    fontFamily: 'Montserrat, sans-serif !important',
    fontWeight: 500,
    lineHeight: '40px',
    letterSpacing: '-0.24px',
    color: '#fff',
    marginBottom: '0.35em'
  },
  logosm:{
    height: '50px',
    marginBottom: '4.7vh',
    display: 'none',
    [theme.breakpoints.down("sm")]: {
        display: 'block',
      },
  },
  paper: {
    margin: theme.spacing(16, 11.2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down("md")]: {
        margin: theme.spacing(5, 9.3),
        justifyContent: ' flex-start;'
      },
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(5, 8),
        justifyContent: ' flex-start;'
      },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3.1, 1.4, 2),
    backgroundColor: '#42E697',
    color: '#fff',
    fontSize: '20px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '-0.06px',
    textTransform: 'none',
    padding: '5px !important',
    height: '52px',
    "&:hover" : {
        backgroundColor: '#42E684',
      },
  },
  textField: {
    width: '100%',
    "&:hover .MuiInputLabel-root": {
      color: theme.palette.text.primary
    },
    "& .Mui-focused.MuiInputLabel-root": {
      color: theme.palette.primary.main
    }
  },
  outlinedInput: {
    "&:hover .MuiInputAdornment-root .MuiSvgIcon-root": {
      color: theme.palette.text.primary
    },
    "&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root": {
      color: '#f00'
    }
  },
  inputWrapper:{
      padding: '23px 12px !important',
  },
  textWrapper:{
      width: '100%',
      color: '#aaa'
  },
  linkText: {   
    color: '#4291e6',
    textDecoration: 'none',
    fontWeight: 300
  },
  headingText: {
    marginBottom: '25px', 
    fontSize: '24px', 
    fontFamily: 'Montserrat, sans-serif', 
    fontWeight: 500, 
    lineHeight: '28px', 
    letterSpacing: '-0.06px',
    [theme.breakpoints.down("md")]: {
        fontSize: '20px', 
      },
  }
}));

export default function LogIn() {
    const [showPassword, setShowPassword] = useState(false)
  const classes = useStyles();
  
  const handleClickShowPassword = () => {
    setShowPassword(prevPass => !prevPass);
  };

  const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={false} md={6} className={classes.bgStyle} >
            <Box className={classes.leftContent}>
                <Box>
                    <img className={classes.logo} src="https://cms.taygo.tech/whitelabel/default_dev/images/logo_light_white.png" alt="Logo" />
                </Box>
                <Typography
                className={classes.leftText}
                    variant='h1'
                >
                    One Button,
                </Typography>
                <Typography
                className={classes.leftText}
                    variant='h1'
                >
                    Consumer Direct Marketing!
                </Typography>
            </Box>
          </Grid>
      <Grid item sm={12} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
            <Box>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
                <Box >
                    <img className={classes.logosm} src="https://cms.taygo.tech/whitelabel/default_dev/images/logo_light_normal.png" alt="Logo" />
                </Box>
          <Typography component="h1" variant="h5" className={classes.headingText}>
            Sign In to TAYGO
          </Typography>
          <Formik
            initialValues={{
                email: '',
                password: '',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().max(255).email('Must be a valid email').required('Email is required'),
                password: Yup.string().max(16).required('Password is required')
            })}
            onSubmit={
                async(values, {setErrors, setStatus, setSubmitting}) => {
                    try {
                        console.log(values);
                    } catch (error) {
                        console.log(error);
                        setStatus({success: false})
                        setErrors({submit: error.message})
                        setSubmitting(false)
                    }
                }
            }
          >

            {({errors, handleBlur, handleSubmit, handleChange, isSubmitting, touched, values})=>(
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} className={classes.inputWrapper}>
                      <TextField
                              id="input-with-icon-textfield"
                              label="Email"
                              fullWidth
                              autoComplete='off'
                              placeholder="example@site.com"
                              className={classes.outlinedInput}
                              name="email"
                              error={Boolean(touched.email && errors.email)}
                              helperText={touched.email && errors.email}
                              onChange={handleChange}
                              InputProps={{
                              startAdornment: (
                                  <InputAdornment position="start"  >
                                      <EmailIcon />
                                  </InputAdornment>
                              ),
                              }}
                          />
                  </Grid>
                  <Grid item xs={12} className={classes.inputWrapper}>
                      <TextField
                              id="input-with-icon-textfield"
                              label="Password"
                              fullWidth
                              placeholder="Password"
                              className={classes.outlinedInput}
                              name="password"
                              type={showPassword ? 'text' : 'password'}
                              error={Boolean(touched.password && errors.password)}
                              helperText={touched.password && errors.password}
                              onChange={handleChange}
                              InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                              </InputAdornment>
                              ),   
                              startAdornment: (
                                <InputAdornment position="start"  >
                                    <Lock />
                                </InputAdornment>
                            ), 
                              }}
                          />
                  </Grid>
  
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Box className={classes.textWrapper}>
                  <Typography align="center" variant="body2" style={{fontSize: '13px', fontFamily: 'Montserrat', marginTop: '11px', letterSpacing: '-0.2px'}}>
                      <Link href="#" className={classes.linkText}>Forgot Password ? </Link>Have a  <Link href="#" className={classes.linkText}>Verification Code?</Link>
                  </Typography>
              </Box>
              <Box className={classes.textWrapper}>
                  <Typography align="center" variant="body2" style={{marginTop: '15px', fontFamily: 'Montserrat', color: '#263238', fontWeight: 300, fontSize: '15px'}}>
                      Dont have an account? <Link href='/' style={{color: '#4291e6'}}>Sign up</Link>
                  </Typography>
              </Box>
              </Grid>
            </form>
            )}

          </Formik>
          
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}