import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getTestData } from "./actions/test";
// import { Route, Switch } from "react-router";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Thread from "./components/Thread/Thread"
import Profile from "./components/profile/Profile";
import QuickChallenge from './components/Challenge/index'

const App = () => {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("NETTEE_TOKEN"));

  useEffect(() => {

  }, [dispatch]);

  // const handleLoginRequirements () => {

  //   return (
  //     <Navigate to="/login" replace={true} />
  //   )
  // }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={(currentUser) ? <Navigate to="/home" replace={true} /> : <Navigate to="/login" replace={true} />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/threads/:threadID/details" element={<Thread />} />
          <Route exact path="/qChallenge" element={<QuickChallenge />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
