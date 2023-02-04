import Home from './pages/Home';
import React, { useState } from 'react';
// import Navigate from './components/Navbar';
import MyBookingIn from "./components/MyBookingIn";
import { AddProperty } from './components/AddProperty';
import HomeOwner from './components/HomeOwner';
import listData from './assets/datas/data';
import Profile from './components/Profile';
// import HomeLogin from './pages/HomeLogin';
import MyBooking from './components/MyBooking';
import Invoice from './components/Invoice';
import MyBookingNext from './components/MyBookingNext';
import DetailProperty from './components/DetailProperty';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
// import IndexOwner from './components/IndexOwner';



function App() {
  const [userSignIn, setUserSignIn] = useState ({
    isLogin: false,
    userName: "",
    password: "",
  });
  return (
      <Routes>
        <Route path='/' element={<Home userSignIn={userSignIn} setUserSignIn={setUserSignIn}/>} />
        <Route path='/profile/' element={<Profile userSignIn={userSignIn} setUserSignIn={setUserSignIn}/>} />
        <Route path='/mybooking/:id' element={<MyBooking userSignIn={userSignIn} setUserSignIn={setUserSignIn} />}/>
        <Route path='/mybookingnext' element={<MyBookingNext userSignIn={userSignIn} setUserSignIn={setUserSignIn} />}/>
        <Route path='/invoice/' element={<Invoice userSignIn={userSignIn} setUserSignIn={setUserSignIn} />}/>
        <Route path='/detail/:id' element={<DetailProperty userSignIn={userSignIn} setUserSignIn={setUserSignIn} listData={listData} />}/>
        <Route path='/add-property/' element={<AddProperty />}/>
        <Route path='/index-owner/' element={<HomeOwner />} />
        <Route path='/booking-in/' element={<MyBookingIn userSignIn={userSignIn} setUserSignIn={setUserSignIn}  />} />

      </Routes>
  )
  // return (
  //   <Profile />
  // )
}

export default App;
