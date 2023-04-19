const initialState = {
    statusbar: "",
    token: null,
    userData: null,
    authData: null
}
export default function userReducer(user = initialState, action) {
    switch (action.type) {
        case "CREATE":
            return { ...user, userData: action?.payload };
        case "AUTH":
            console.log("the data is ", action.payload);
            localStorage.setItem("NETTEE_TOKEN", JSON.stringify({ ...action?.payload }))
            return { ...user, authData: action?.payload };
        default:
            return user;
    }
}
