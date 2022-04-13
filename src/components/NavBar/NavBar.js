import reactDom, { Component } from 'react';
/* MUI COMPONENTS */

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  ThemeProvider,
  IconButton,
  Avatar,
  Container,
  Grid,
  Link,
  InputBase,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';

import './Style/style.css';
/* DRAWER */
import DrawerMenu from '../Drawer/Drawer';
import DrawerRight from './DrawerRight';
import DrawerLeft from './DrawerLeft';

/* ICONS */
import MenuOpenDrawerIcon from '@mui/icons-material/Menu';
import { Login, Menu, Search } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

/* FIRE BASE */
import { db } from '../../connections/firebase';
import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore'


const theme = createTheme({
  palette: {
    primary: {
      main: '#11468F',
    },
    secondary: {
      main: '#FB3640',
    },
    error: {
      main: '#FF0000',
    },
    info: {
      main: '#FFC600',
    },
    darkWhite: {
      main: '#393E46',
    },
    milk: {
      main: '#F7F5F2',
    },
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validateUser: false,
      user: {},
      signIn: false,
      subscribe: true,
      displayName: '',
      email: '',
      userProfilePhoto:
        'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      showDrawerRight: false,
      showDrawerLeft: false,
    };
  }

  handleShowDrawer = (side, status) => {
    side === 'right'
      ? this.setState({
        showDrawerRight: status,
      })
      : this.setState({
        showDrawerLeft: status,
      });
  };

  handleAuth() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        const uid = user.uid
        const docRef = doc(db, "users", uid)
        const docSnap = getDoc(docRef).then((res) => {
          const data = res._document.data.value.mapValue.fields
          console.log(data.email.stringValue)
          this.setState({
            email: data.email.stringValue,
            displayName: data.firstName.stringValue,
            firstName: data.firstName.stringValue,
            lastName: data.lastName.stringValue,
            signIn: true,
          })
        })
        console.log("User is sign In")
      } else {
        console.log("User is signed out")
      }
    })

  }
  componentDidMount() {
    this.handleAuth()
  }
  render() {

    const logo = ['A', 'N', 'I', 'M', 'E'];
    const colors = ['#e83a14', '#ff6c09', '#fd922d', '#ff6c09', '#e83a14'];
    return (
      <>
        <ThemeProvider theme={theme}>
          <Box sx={{}}>
            <AppBar color='darkWhite' elevation={1}>
              <Container maxWidth='lg' sx={{ padding: 0 }}>
                <Toolbar sx={{ padding: 0, margin: 0 }}>
                  <Grid container>
                    <Grid
                      item
                      lx={5}
                      lg={5}
                      md={5}
                      sm={2}
                      xs={2}
                      sx={{
                        height: 60,
                        paddingTop: {
                          xs: 0,
                          sm: 0,
                          md: 0,
                          lg: `${this.state.signIn == true ? 19.5 : 8}px`,
                          xl: `${this.state.signIn == true ? 19.5 : 8}px`,
                        },
                      }}
                    >
                      <Typography
                        align='left'
                        flexGrow={1}
                        sx={{}}
                        component='div'
                      >
                        <IconButton
                          color='warning'
                          size='large'
                          onClick={() => this.handleShowDrawer('left', true)}
                          sx={{
                            display: {
                              xs: 'inline-flex',
                              sm: 'inline-flex',
                              md: 'inline-flex',
                              lg: 'none',
                            },
                          }}
                        >
                          <MenuOpenDrawerIcon fontSize='large' />
                        </IconButton>
                        <Typography
                          className='navItensContainer'
                          display={{
                            xs: 'none',
                            sm: 'none',
                            md: 'none',
                            lg: 'flex',
                            xl: 'flex',
                          }}
                          component='div'
                        >
                          <a className='navItem' href='###' id='releases'>
                            Releases
                          </a>
                          <a className='navItem' href='###' id='mostViewed'>
                            Most Viewed
                          </a>
                          <a
                            className='navItem'
                            href='/customizedSearch'
                            id='customizedSearch'
                          >
                            Customized Search
                          </a>
                          <a className='navItem' href='###' id='theBest'>
                            The Best
                          </a>
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lx={2}
                      lg={2}
                      md={2}
                      sm={8}
                      xs={8}
                      sx={{
                        paddingTop: {
                          xs: 2,
                          sm: 2,
                          md: 2,
                          lg: 1,
                          xl: 1,
                        },
                      }}
                    >
                      <Typography
                        align='center'
                        flexGrow={1}
                        color='#000'
                        component='div'
                        sx={{ margin: 0, padding: 0 }}
                      >
                        <Typography
                          sx={{
                            display: 'inline-flex',
                            justifyContent: 'space-around',
                            margin: 0,
                            padding: 0,
                            /* paddingTop: {
                              xs: 0,
                              sm: 0,
                              md: 0,
                              lg: `${
                                this.state.user.signIn === true ? 0 : 0
                              }px`,
                              xl: `${
                                this.state.user.signIn === true ?  : 7
                              }px`,
                            }, */
                          }}
                          component='div'
                        >
                          {logo.map((txt, index) => {
                            return (
                              <a
                                href='./'
                                style={{
                                  color: colors[index],
                                  fontSize: '18pt',
                                  padding: '0px',
                                  margin: '0px',
                                }}
                                key={index}
                              >
                                {txt}
                              </a>
                            );
                          })}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item lx={5} lg={5} md={5} sm={2} xs={2}>
                      <Typography align='right' flexGrow={1} component='div'>
                        <Box
                          display={{
                            xs: 'none',
                            sm: 'none',
                            md: 'none',
                            lg: 'inline-flex',
                            xl: 'inline-flex',
                          }}
                        >
                          <InputBase placeholder='Search Anime' />
                          <IconButton>
                            <Search />
                          </IconButton>
                        </Box>
                        {this.state.signIn === true ? (
                          <>
                            <IconButton
                              color='darkWhite'
                              onClick={() =>
                                this.handleShowDrawer('right', true)
                              }
                              sx={{ display: 'inline-flex' }}
                            >
                              <Avatar
                                className='avatar'
                                src={`${this.stateuserPhoto}`}
                                sx={{
                                  width: 50,
                                  height: 50,
                                }}
                              ></Avatar>
                            </IconButton>
                          </>
                        ) : (
                          <>
                            <Button
                              variant='contained'
                              color='primary'
                              sx={{
                                mr: { xs: 0, sm: 1 },
                                display: {
                                  xs: 'none',
                                  sm: 'none',
                                  md: 'none',
                                  lg: 'inline-flex',
                                  xl: 'inline-flex',
                                },
                              }}
                              href='/signin'
                            >
                              Sing in
                            </Button>
                            <Button
                              sx={{
                                mr: { xs: 0, sm: 1 },
                                display: {
                                  xs: 'none',
                                  sm: 'none',
                                  md: 'none',
                                  lg: 'inline-flex',
                                  xl: 'inline-flex',
                                },
                              }}
                              variant='outlined'
                              color='secondary'
                              href='/signup'
                            >
                              Sign up
                            </Button>

                            <IconButton
                              sx={{
                                display: {
                                  xs: 'inline-flex',
                                  sm: 'inline-flexe',
                                  md: 'inline-flexe',
                                  lg: 'none',
                                  xl: 'none',
                                },
                              }}
                              color='milk'
                              size='large'
                              href='/signin'
                            >
                              <AccountCircleIcon fontSize='large' />
                            </IconButton>
                          </>
                        )}
                      </Typography>
                    </Grid>
                  </Grid>
                </Toolbar>
              </Container>
            </AppBar>
          </Box>

          <DrawerMenu
            open={this.state.showDrawerLeft}
            side={'left'}
            onClose={() => this.handleShowDrawer('left', false)}
            content={<DrawerLeft subscribe={this.state.user.subscribe} />}
          />
          <DrawerMenu
            open={this.state.showDrawerRight}
            side={'right'}
            onClose={() => this.handleShowDrawer('right', false)}
            content={
              <DrawerRight
                signIn={this.state.signIn}
                displayName={this.state.displayName}
                email={this.state.email}
                userPhoto={this.state.userProfilePhoto}
              />
            }
          />
        </ThemeProvider>
      </>
    );
  }
}

export default NavBar
