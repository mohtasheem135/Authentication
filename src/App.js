import React from 'react';
import { Route, Routes } from "react-router";
import Home from './Home/Home';
import SignUp from './SignUp/SignUp';
import LogIn from './LogIn/LogIn';
import UserHome from './User Home/UserHome';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/userHome" element={<UserHome />} />
      </Routes>
    </div>
  );
}

export default App;
