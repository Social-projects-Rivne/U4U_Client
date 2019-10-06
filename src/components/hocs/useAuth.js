import { useState, useEffect } from 'react';
import api from '../../services/tourist-service';

const useAuth = () => {
    const [state, setState] = useState({
       loading: true,
       status: null
    });

    useEffect(() => {
       api.checkAuth()
           .then(res => {
               setState({ loading: false, status: true })
           })
           .catch(err => {
               setState({ loading:  false, status: false })
           })
    }, []);

    return state.status;
};

export default useAuth;