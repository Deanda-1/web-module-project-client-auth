import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const FriendsList = () => {
    const [ friends, setFriends ] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem("token");
        Axios.get('http://localhost:5000/api/friends'), {
            headers: {
                authorization: token 
            }
        }
        .then(resp => {
            setFriends(resp.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
    return (<div>
        <h2>FriendsList</h2>
        <ul>
            {
                friends.map(friend => {
                    // eslint-disable-next-line react/jsx-key
                    return <li>{friend.name} - {friend.age} - {friend.email}</li>
                })
            }
            
        </ul>
        </div>)














    
  }



  export default FriendsList;