import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';


async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-body">
      <h1 className='login-title'>Moody</h1>
      <h3 className='login-subtitle'>az egészségügyi naplód</h3>
      <div className='login-wrapper'>
        <h1>Bejelentkezés</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" placeholder="felhasználónév" onChange={e => setUserName(e.target.value)}/>
          </label>
          <label>
            
            <input type="password" placeholder="jelszó" onChange={e => setPassword(e.target.value)}/>
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>  
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};