const initialState = {
    status: "success",
    results: 0,
    data: {
        threadData: [],
    },
    newThread: null
}
export default function threadReducer(thread = initialState, action) {
    switch (action.type) {
        case 'FETCH_ALL_THREAD':
            return {
                ...thread,
                data: {
                    threadData: action?.payload,
                }
            };
        case 'CREATE':
            return {
                ...thread,
                newThread: action?.payload
            };;
        case 'UPDATE_COMMENT':
            // return {
            //     ...thread,
            //     data: {
            //         threadData: [...thread.data.threadData.comments, action.payload],
            //     }
            // };;
            return thread;
        default:
            return thread;
    }
}
