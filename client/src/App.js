import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getTestData } from "./actions/test";
// import { Route, Switch } from "react-router";
import { BrowserRouter as Router, Route, Routes, Navigate, useOutlet } from "react-router-dom";

import { ProtectedRoute } from "./auth/ProtectedRoute";
import { AuthProvider } from "./auth/AuthHook";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Thread from "./components/Thread/Thread"
import Profile from "./components/Profile/Profile";
import QuickChallenge from './components/Challenge/index'

const App = () => {
  const dispatch = useDispatch();
  const outlet = useOutlet();
  useEffect(() => {
  }, [dispatch]);

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/home" element={
              <ProtectedRoute>
                < Home />
              </ProtectedRoute>
            } />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>} />
            <Route exact path="/threads/:threadID/details" element={
              <ProtectedRoute>
                <Thread />
              </ProtectedRoute>} />
            <Route exact path="/qChallenge" element={
              <ProtectedRoute>
                <QuickChallenge />
              </ProtectedRoute>} />

          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
