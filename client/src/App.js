import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTestData } from "./actions/test";

// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTestData());
  }, [dispatch]);

  return (
    <>
      <Home />
      {/* <Signup />
      <Login /> */}
    </>
  );
};

export default App;
