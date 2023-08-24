/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';




const AddFriend = () => {
    const { push } = useHistory();
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    });
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value 
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        Axios.post('http://localhost5000/api/friends', form, {
            Headers: {
                authorization: token
            }                                
        })
        .then(resp => {
            push('/friends');
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (<div>
        <h2>AddFriend</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input onChange={handleChange} name="name" id="name" />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input onChange={handleChange} name="age" id="age" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input onChange={handleChange} name="email" id="email" />
            </div>
        </form>
        </div>)
  }





  export default AddFriend;