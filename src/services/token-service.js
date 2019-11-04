const TOKEN_KEY = 'token'
const REFRESH_TOKEN_KEY = 'refreshToken'

class TokenService {
    getToken = () => {
        const accessToken = localStorage.getItem(TOKEN_KEY);
        
        if(accessToken)
            return localStorage.getItem(TOKEN_KEY);
        else
        {
            const errorsObj = {
                errors : [{ mgs: "Can`t find access token" }]
            };

            throw new Error(JSON.stringify(errorsObj));
        }
    };

    saveToken = (accessToken) => {
        localStorage.setItem(TOKEN_KEY, accessToken);
    };

    removeToken = () => {
        localStorage.removeItem(TOKEN_KEY);
    };


    getRefreshToken = () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

        if(refreshToken)
            return localStorage.getItem(REFRESH_TOKEN_KEY);
        else
        {
            const errorsObj = {
                errors : [{ mgs: "Can`t find refresh token" }]
            };

            throw new Error(JSON.stringify(errorsObj));
        }
    };

    saveRefreshToken = (refreshToken) => {
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    };

    removeRefreshToken = () => {
        localStorage.removeItem(REFRESH_TOKEN_KEY);
    };
};

export default new TokenService();