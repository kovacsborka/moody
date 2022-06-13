import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';


import { FaHeart } from 'react-icons/fa';
import {BsFillPersonFill} from 'react-icons/bs'
import {IoMdLock} from 'react-icons/io'
import {BsFacebook} from 'react-icons/bs'
import {FaGooglePlus} from 'react-icons/fa'


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
      <div className='titles'>
        <h1 className='login-title'>Moody</h1>
        <h3 className='login-subtitle'> < FaHeart/> az egészségügyi naplód</h3>
      </div>
      <div className='login-wrapper'>
        <h1>Bejelentkezés</h1>
        <form onSubmit={handleSubmit}>
          <label> 
            {/* <i>< BsFillPersonFill/> </i> */}
            <input type="text" placeholder="felhasználónév" onChange={e => setUserName(e.target.value)}/>
          </label>
          <label>
            {/* <i> <IoMdLock/> </i> */}
            <input type="password" placeholder="jelszó" onChange={e => setPassword(e.target.value)}/>
          </label>
          <div>
            <button type="submit">Belépés</button>
          </div>
        </form>
        <div className='emlekezz_jelszo'>
          <div className='checkbox'>
            <input type="checkbox" id="emlekezz" name="emlekezz"/>
            <label htmlFor="emlekezz">Emlékezz rám</label>
          </div>
          <span>Elfelejtett jelszó?</span>
        </div>
        <p>vagy</p>
        <i> <BsFacebook color='#536dff'/> </i>
        <i> <FaGooglePlus color='#536dff'/> </i>
        <p>Nincs még fiókod? <span style={{color: '#536dff'}}>Regisztrálj!</span></p>

      </div>  
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};