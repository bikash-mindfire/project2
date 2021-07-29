import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroid from '@material-ui/icons/PhoneAndroid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

import {Formik} from 'formik'
import * as Yup from 'yup'
import InputMask from "react-input-mask";

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
  logosm:{
    height: '50px',
    marginBottom: '4.7vh',
    display: 'none',
    [theme.breakpoints.down("sm")]: {
        display: 'block',
      },
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
  paper: {
    margin: theme.spacing(9.3, 11.2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down("md")]: {
        margin: theme.spacing(5, 9.3),
        justifyContent: ' flex-start;'
      },
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(5, 4.3),
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
    margin: theme.spacing(4, 1.4, 2),
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
      padding: '26px 12px !important',
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

export default function SignUp() {
  const classes = useStyles();
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
          <Box>
                    <img className={classes.logosm} src="https://cms.taygo.tech/whitelabel/default_dev/images/logo_light_normal.png" alt="Logo" />
                </Box>
          <Typography component="h1" variant="h5" className={classes.headingText}>
            Sign up to TAYGO
          </Typography>
          <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                firstName: Yup.string().max(20).required('First name is required'),
                lastName: Yup.string().max(20).required('Last name is required'),
                email: Yup.string().max(255).email('Must be a valid email').required('Email is required'),
                phone: Yup
                .string()
                .test("len", "Invalid phone no.", (val = "") => {
                  const val_length_without_dashes = val.replace(/-| /g, "").length;
                  return val_length_without_dashes === 10;
                })
                .required("Phone no. is required")
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
                    <Grid item xs={12} sm={6} className={classes.inputWrapper}>
                    <TextField
                              id="input-with-icon-textfield"
                              label="First Name"
                              fullWidth
                              placeholder="John"
                              name="firstName"
                              autoComplete='off'
                              className={classes.outlinedInput}
                              error={Boolean(touched.firstName && errors.firstName)}
                              helperText={touched.firstName && errors.firstName}
                              onChange={handleChange}
                              InputProps={{
                              startAdornment: (
                                  <InputAdornment position="start"  >
                                      <AccountCircle />
                                  </InputAdornment>
                              ),
                              }}
                          />
                    </Grid>
                
                    <Grid item xs={12} sm={6} className={classes.inputWrapper}>
                      <TextField
                              id="input-with-icon-textfield"
                              label="Last Name"
                              fullWidth
                              placeholder="Doe"
                              name="lastName"
                              autoComplete='off'
                              className={classes.outlinedInput}
                              error={Boolean(touched.lastName && errors.lastName)}
                              helperText={touched.lastName && errors.lastName}
                              onChange={handleChange}
                              InputProps={{
                              startAdornment: (
                                  <InputAdornment position="start"  >
                                      <AccountCircle />
                                  </InputAdornment>
                              ),
                              }}
                          />
                  </Grid>
                  <Grid item xs={12} className={classes.inputWrapper}>
                      <TextField
                              id="input-with-icon-textfield"
                              label="Email"
                              fullWidth
                              placeholder="example@site.com"
                              autoComplete='off'
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
                  <InputMask
                    mask="999-999-9999"
                    onChange={handleChange}
                    value={values.phone}
                    maskPlaceholder=" "
              >
                {() => (
                      <TextField
                              id="input-with-icon-textfield"
                              label="Mobile Number"
                              fullWidth
                              placeholder="999 - 888 - 7777"
                              autoComplete='off'
                              className={classes.outlinedInput}
                              name="phone"
                              error={Boolean(touched.phone && errors.phone)}
                              helperText={touched.phone && errors.phone}
                              InputProps={{
                              startAdornment: (
                                  <InputAdornment position="start"  >
                                      <PhoneAndroid />
                                  </InputAdornment>
                              ),
                              }}
                          />)}
                          </InputMask>
                  </Grid>
  
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                
              >
                Start with TAYGO
              </Button>
              <Box className={classes.textWrapper}>
                  <Typography align="center" variant="body2" style={{fontSize: '13px', fontFamily: 'Montserrat', marginTop: '11px', letterSpacing: '-0.2px'}}>
                      By clicking the button, I agree to the <Link href="#" className={classes.linkText}>Terms of Services </Link>and <Link href="#" className={classes.linkText}>Privacy Policy</Link>
                  </Typography>
              </Box>
              <Box className={classes.textWrapper}>
                  <Typography align="center" variant="body2" style={{marginTop: '15px', fontFamily: 'Montserrat', color: '#263238', fontWeight: 300, fontSize: '15px'}}>
                      Already a member? <Link href='/login' style={{color: '#4291e6'}}>Sign In</Link>
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