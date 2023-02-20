export default function testReducer(test = [], action) {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...test, action.payload];
    default:
      return test;
  }
}
