import { React, Component } from 'react';

import {
  Avatar,
  Grid,
  Typography,
  Box,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  InputAdornment,
  IconButton,
} from '@mui/material';

import { LockOutlined } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';

/* FIRE BASE */
import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth';

class Signin extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSignIn(email, password) {
    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence).then(() => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user, ', você foi logado com sucesso');
          window.location.assign('http://localhost:3000/');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    });
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }
  render() {
    console.log(getAuth());
    return (
      <>
        <Grid
          container
          component='main'
          sx={{
            height: '100vh',
            backgroundColor: '#303030',
          }}
        >
          <Grid
            item
            md={7}
            lg={7}
            xl={7}
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
                lg: 'flex',
                xl: 'flex',
              },
              backgroundImage:
                'url(https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
              backgroundSize: '100% 100vh',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            xl={5}
            sx={{ backgroundColor: '#fff', mx: 0 }}
          >
            <Box componet='form' sx={{ mt: 10, mx: 2 }} id='formValidation'>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  my: 2,
                  p: 1,
                }}
              >
                <Typography
                  variant='h5'
                  sx={{ color: '#2666CF' }}
                  alignContent={'center'}
                >
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: '#8A39E1',
                      m: 1,
                      ml: 2,
                    }}
                  >
                    <LockOutlined />
                  </Avatar>
                  Sign in
                </Typography>
              </Box>
              <Grid container item spacing={2} xs={12}>
                <Grid item xs={12}>
                  <TextField
                    value={this.state.email}
                    onChange={this.handleChange}
                    type='email'
                    id='email'
                    name='email'
                    label='Email Address'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={this.state.password}
                    onChange={this.handleChange}
                    type='password'
                    id='password'
                    name='password'
                    label='Password'
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton>
                            <VisibilityIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label='Remember me'
                    ></FormControlLabel>
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sx={{ mx: 0, px: 0 }}>
                  <Button
                    variant='contained'
                    fullWidth
                    onClick={() =>
                      this.handleSignIn(this.state.email, this.state.password)
                    }
                  >
                    Sign in
                  </Button>
                </Grid>

                <Grid item container>
                  <Grid item xs={12} sm={6}>
                    <Typography textAlign={'left'}>
                      <Link href='#'>Forgot password?</Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography textAlign={'left'}>
                      <Link href='http://localhost:3000/signup'>
                        Don't have an account? Sign Up
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} justifyContent={'center'} sx={{ mt: 6 }}>
                    <Typography variant={'body2'} sx={{ color: '#606060' }}>
                      Copyright ©
                      <Link href='#' color={'inherit'}>
                        Your Website
                      </Link>{' '}
                      2022.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Signin;
