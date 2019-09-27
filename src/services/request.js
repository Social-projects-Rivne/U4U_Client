

const getHeaders = () => ({
    'Content-Type': 'application/json',
    'Accept-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
});


const responseHandler = (alert = false) => async (res) => {
    if (res.ok) {
        if (alert) {
            Notify.success(alert);
        }

        return await res.json();
    }
    Notify.error({
        message: res.message,
        anchor: { horizontal: 'right', vertical: 'top' },
        behaviour: { type: 'fade', details: 'right' },
    });
};

// https:/${projectId}.firebaseio.com/users.json?auth=${localStorage.getItem('token')}
const get = (url, alert) => fetch(``, {
    method: 'GET',
    headers: getHeaders(),
}).then(responseHandler(alert));

const post = (url, body, alert) => fetch(``, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(body),
}).then(responseHandler(alert));

const remove = (url, alert) => fetch(``, {
    method: 'DELETE',
    headers: getHeaders(),
});

export default {
    get,
    post,
    remove,
};