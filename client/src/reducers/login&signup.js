const initialState = {
    statusbar: "",
    token: null,
    data: {
        userData: []
    }
}
export default function userReducer(user = initialState, action) {
    switch (action.type) {
        case "CREATE":
            return [...user, action.payload];
        default:
            return user.data?.userData;
    }
}
