import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../components/Home/HomePage';
import SignUp from '../components/SignUp/SignUp';
import Signin from '../components/SignIn/Signin';
import Teste from '../components/Tests/Teste';
import CustomizedSearch from '../components/CustomizedSearch/CustomizedSearch';

class PageRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/teste' element={<Teste />} />
        <Route path='/customizedSearch' element={<CustomizedSearch />} />
      </Routes>
    );
  }
}

export default PageRoutes;
