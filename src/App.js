import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';




function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={< Dashboard/>}>
            
          </Route>
          <Route path="/preferences" element={<Preferences/>}>
            {/* <Preferences /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;