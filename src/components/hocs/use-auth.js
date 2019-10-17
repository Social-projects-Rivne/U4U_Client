import { useState, useEffect } from 'react';
import api from '../../services/tourist-service';

const useAuth = (onAuth) => {
    const [state, setState] = useState({
       loading: true,
       status: null
    });

    useEffect(() => {
       api.checkAuth()
           .then(res => {
               setState({ loading: false, status: true });
               onAuth(true)
           })
           .catch(err => {
               setState({ loading:  false, status: false });
               onAuth(false);
           })
    }, []);

    return state.status;
};

export default useAuth;