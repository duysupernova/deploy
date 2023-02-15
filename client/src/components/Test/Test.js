import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const test = useSelector((state) => !state.testReducer);

  return (
    <>
      <div>test components</div>
      {test &&
        test.map((child) => {
          return (
            <div>
              <h1>{child.title}</h1>
              <div>{child.content}</div>
            </div>
          );
        })}
    </>
  );
};

export default Test;
