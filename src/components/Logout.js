/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';






const Logout = () => {
    const { push } = useHistory();
    useEffect(() => {
        const token = localStorage.getItem("token");
        Axios.post('http://lodalhost:5000/api/logout', {}, {
            headers: {
                authorization: token
            }
        })
        .then(resp => {
            localStorage.removeItem("token");
            push('/login');
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
    return (<div></div>);
}






export default Logout;