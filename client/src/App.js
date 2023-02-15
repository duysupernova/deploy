import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTestData } from "./actions/test";

// import useStyles from "./globalStyles";
import Test from "./components/Test/Test";

const App = () => {
  // const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTestData());
  }, [dispatch]);

  return (
    <>
      <div>App element</div>
      <Test />
    </>
  );
};

export default App;
