import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../components/Home/HomePage';
import SignUp from '../components/SignUp/SignUp';
import Signin from '../components/SignIn/Signin';
import Teste from '../components/Tests/Teste';
import CustomizedSearch from '../components/CustomizedSearch/CustomizedSearch';
import UserDataRegistration from '../components/UserDataRegistration/UserDataRegistration';
import Profile from '../components/Profile/Profile';

class PageRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/registration' element={<UserDataRegistration />} />
        <Route path='/teste' element={<Teste />} />
        <Route path='/customizedSearch' element={<CustomizedSearch />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    );
  }
}

export default PageRoutes;
