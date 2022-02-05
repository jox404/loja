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
} from '@mui/material';

import imagens from '../home/img';
import { LockOutlined } from '@mui/icons-material';
import { bgcolor } from '@mui/system';

const xicaras = imagens.xicara[0];
console.log(xicaras);
class Singin extends Component {
  render() {
    return (
      <>
        <Grid
          container
          component='main'
          sx={{ height: '100vh', backgroundColor: '#303030' }}
          spacing={2}
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
                'url(https://images.pexels.com/photos/8697430/pexels-photo-8697430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
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
            sx={{ backgroundColor: '#fff' }}
            justifyContent={'center'}
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
                    aling
                  >
                    <LockOutlined />
                  </Avatar>
                  Sing in
                </Typography>
              </Box>
              <Grid container item spacing={2} xs={12}>
                <Grid item xs={12}>
                  <TextField
                    id='email'
                    name='email'
                    label='Email Address'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type='password'
                    id='password'
                    name='password'
                    label='Password'
                    fullWidth
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
                  <Button variant='contained' fullWidth>
                    Sing in
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
                      <Link href='#'>Don't have an account? Sign Up</Link>
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

export default Singin;
