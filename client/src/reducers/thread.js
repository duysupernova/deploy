const initialState = {
    status: "success",
    results: 0,
    data: {
        threadData: {},
    },
}
export default function threadReducer(thread = initialState, action) {
    switch (action.type) {
        case 'FETCH_ALL':
            return [{ ...thread.data }, action.payload];
        default:
            return thread;
    }
}
