import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../components/Home/HomePage';
import SignUp from '../components/SignUp/SignUp';
import Signin from '../components/SignIn/Signin';
import Teste from '../components/Tests/Teste';
import CustomizedSearch from '../components/CustomizedSearch/CustomizedSearch';
import UserDataRegistration from '../components/UserDataRegistration/UserDataRegistration';
import Profile from '../components/Profile/Profile';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import DefaultTheme from '../components/Themes/DefaultTheme';
import AnimePage from '../components/AnimePage/AnimePage';
import ResetPassword from '../components/ResetPassword/ResetPassword';

class PageRoutes extends Component {
  render() {
    return (
      <ThemeProvider theme={DefaultTheme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/registration' element={<UserDataRegistration />} />
          <Route path='/customizedSearch' element={<CustomizedSearch />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Anime/:id' element={<AnimePage />} />
          <Route path='/ResetPassword' element={<ResetPassword />} />
        </Routes>
      </ThemeProvider>
    );
  }
}

export default PageRoutes;
