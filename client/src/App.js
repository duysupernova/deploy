import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTestData } from "./actions/test";

// import useStyles from "./globalStyles";
// import Test from "./components/Test/Test";
// import Form from "./components/Form/Form";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";


const App = () => {
  // const styles = useStyles();
  // const [edit, setedit] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTestData());
  }, [dispatch]);

  return (
    <>
      {/* <Test setedit={setedit} />
      <Form edit={edit} /> */}
      <Signup />
      <Login />
    </>
  );
};

export default App;
