/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Axios from 'axios';






const Logout = () => {
    useEffect(() => {
        Axios.post('http://lodalhost:5000/api/logout')
        .then(resp => {
            console.log(resp);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
    return (<div></div>);
}






export default Logout;