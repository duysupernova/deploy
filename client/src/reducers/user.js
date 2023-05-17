const initialState = {
    statusbar: "",
    token: null,
    userData: null,
    authData: ""
}
export default function userReducer(user = initialState, action) {
    switch (action.type) {
        case "CREATE":
            return { ...user, userData: action?.payload };
        case "AUTH":
            localStorage.setItem("NETTEE_TOKEN", JSON.stringify({ ...action?.payload }));
            return { ...user.authData, authData: JSON.stringify(action?.payload) };
        case "UPDATE_LIKE":
            return user;
        case "UPDATE_SHARE":
            return user;
        case "UPDATE_PIN":
            return user;
        default:
            return user;
    }
}
