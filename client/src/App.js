import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTestData } from "./actions/test";
// import { Route, Switch } from "react-router";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./chat/chat.css"
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import AuthPage from "./chat/Authpage";
import ChatsPage from "./chat/ChatsPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTestData());
  }, [dispatch]);

  const [user, setUser] = useState(undefined);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={(false) ? <Navigate to="/posts" replace={true} /> : <Navigate to="/home" replace={true} />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}></Route> 
          <Route path="/chat" element={!user ?( <AuthPage onAuth={(user) => setUser(user)} /> ): (<ChatsPage user={user} />)}></Route> 
        </Routes>
      </Router>
    </>
  );
};

export default App;
