import { react, Component } from 'react';

import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import '../Drawer/style/drawerMenu.css';
import './Style/style.css';

import ProfileIcon from '@mui/icons-material/Person';
import MylistIcon from '@mui/icons-material/FormatListBulleted';
import FavoritesIcon from '@mui/icons-material/Star';
import SeeLaterIcon from '@mui/icons-material/RemoveRedEye';
import DroppedIcon from '@mui/icons-material/Delete';
import HistoryIcon from '@mui/icons-material/AccessTimeFilledOutlined';
import { Logout } from '@mui/icons-material';
import { getAuth, signOut } from 'firebase/auth';

class DrawerRight extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleSignOut() {
    console.log('chamou');
    const outh = getAuth();
    signOut(outh)
      .then(() => {
        console.log('você saiu');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <Box className='drawerBgColor'>
          <Box
            className='drawerProfile'
            bgcolor={'darksalmon'}
            sx={{ width: { xs: 250, sm: 300, md: 300, lg: 300, xl: 455 } }}
          >
            <Avatar
              className='avatar'
              src={this.props.userProfilePhoto}
              sx={{ width: 70, height: 70 }}
            ></Avatar>
            <Typography variant='h5'>{this.props.userName}</Typography>
            <Typography variant='body2'>{this.props.userEmail}</Typography>
          </Box>
          <List className='list' sx={{ padding: 0 }}>
            <ListItem className='itemList'>
              <ProfileIcon sx={{ mr: 1 }} /> Profile
            </ListItem>
            <Divider />
            <ListItem className='itemList'>
              <MylistIcon sx={{ mr: 1 }} />
              My Manga List
            </ListItem>
            <Divider />
            <ListItem className='itemList'>
              <FavoritesIcon sx={{ mr: 1 }} />
              Favorites Manga
            </ListItem>
            <Divider />
            <ListItem className='itemList'>
              <SeeLaterIcon sx={{ mr: 1 }} />
              See Later
            </ListItem>
            <Divider />
            <ListItem className='itemList'>
              <DroppedIcon sx={{ mr: 1 }} />
              Dropped
            </ListItem>
            <ListItem className='itemList'>
              <HistoryIcon sx={{ mr: 1 }} />
              History
            </ListItem>
            <Divider />
            <Box
              sx={{
                justifyContent: 'space-around',
                display: 'flex',
              }}
            >
              <Button
                onClick={this.handleSignOut}
                variant='contained'
                color='secondary'
                endIcon={<Logout />}
                sx={{ mt: 2 }}
              >
                SIGN OUT
              </Button>
            </Box>
          </List>
        </Box>
      </>
    );
  }
}

export default DrawerRight;
