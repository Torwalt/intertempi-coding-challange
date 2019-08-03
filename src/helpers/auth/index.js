const TOKEN_KEY = 'jwt';

export const login = () => {
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    // if (localStorage.getItem(TOKEN_KEY)) {
    //     return true;
    // }
    return true;
}

export const register = () => {
    // only temp fake reg
    // i.e. user saved
    // needs to check if user exists already and then do the rest
}