import {
  Grid,
  Box,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Avatar,
  Typography,
  Button,
  Link,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { React, Component } from 'react';

class Singup extends Component {
  constructor(props) {
    super(props);

    this.state = { firstName: '', lastName: '', email: '', password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const datas = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(datas);
  }
  render() {
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 9,
          }}
          component='form'
          onSubmit={this.handleSubmit}
        >
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: '#9c27b0',
              mb: 1,
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component={'h1'} variant='h5'>
            {'Sign up'}
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              maxWidth: { xs: 350, sm: 410, md: 410, lg: 410, xl: 410 },
              mt: 1,
              mb: 2,
            }}
          >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <TextField
                name='firstName'
                label='First Name'
                type={'name'}
                fullWidth
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <TextField
                name='lastName'
                label='Last Name'
                type={'name'}
                fullWidth
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='email'
                label='Email Address'
                type={'email'}
                fullWidth
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='password'
                label='Password'
                type={'password'}
                fullWidth
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label='I want to receive inspiration, marketing promotions and updates via email.'
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sx={{ mt: 1 }}>
              <Button
                variant='contained'
                color='primary'
                fullWidth
                type='submit'
              >
                SIGN UP
              </Button>
            </Grid>
            <Grid item container justifyContent={'flex-end'}>
              <Typography variant='body2'>
                <Link>Already have an account? Sign in</Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}
export default Singup;
