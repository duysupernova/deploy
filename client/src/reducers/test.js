export default function testReducer(test = [], action) {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...test, action.payload];
    case "UPDATE":
      return test.map((singleTest) => singleTest._id === action.payload._id ? action.payload : singleTest);
    case "DELETE":
      return test.filter((singleTest) => singleTest._id !== action.payload);
    default:
      return test;
  }
}
