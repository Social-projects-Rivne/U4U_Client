
class Request {

    baseUrl = `/api`;

    get = (url) => fetch(`${this.baseUrl}/${url}`, {
        method: 'GET',
        headers: this._getHeaders(),
    }).then(this._responseHandler(url, 'get'));

     post = (url, body) => fetch(`${this.baseUrl}/${url}`, {
        method: 'POST',
        headers: this._getHeaders(),
        body: JSON.stringify(body),
    }).then(this._responseHandler(url, 'post', body));

     put = (url, body) => fetch(`${this.baseUrl}/${url}`, {
        method: 'PUT',
        headers: this._getHeaders(),
        body: JSON.stringify(body),
    }).then(this._responseHandler(url, 'put', body));

     delete = (url) => fetch(`${this.baseUrl}/${url}`, {
        method: 'DELETE',
        headers: this._getHeaders(),
    }).then(this._responseHandler(url, 'remove'));


    _getHeaders = () => ({
        'Content-Type': 'application/json',
        'Accept-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    _responseHandler = (url, method, body = {}) => async (response) => {
        if(response.status === 401 && localStorage.getItem('refreshToken')) {
            const refreshToken = localStorage.getItem('refreshToken');
            try {
                // try refresh token
                // do not use this.put here
                const res = await fetch(`${this.baseUrl}/refresh-token`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ refreshToken })
                });

                if(res.ok) {
                    const { accessToken, refreshToken } = await res.json();

                    // set new tokens
                    localStorage.setItem('token', accessToken);
                    localStorage.setItem('refreshToken', refreshToken);

                    // resend request with new access Token
                    return await fetch(`${this.baseUrl}/${url}`, { method, body: JSON.stringify(body) });
                } else {
                    // in the future here also will be store dispatch which will redirect user to login
                    localStorage.removeItem('token');
                    localStorage.removeItem('refreshToken');
                    return;
                }
            } catch (e) {
                // in the future here also will be store dispatch which will redirect user to login
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
                return;
            }
        }
        // check status code
        if(!response.ok) {
            return await Promise.reject(response);
        }

        return response.json()
            .then(res => {
               return res;
            })
            .catch(err => {
                return response;
            });
    };
}

export default new Request();