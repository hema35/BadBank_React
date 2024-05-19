import NavBar from './Components/navbar';
import Home from './Components/home';
import CreateAccount from './Components/createaccount';
import Alldata from './Components/alldata';
import Balance from './Components/balance';
import Withdraw from './Components/withdraw';
import Deposit from './Components/deposit';
import Login from './Components/login';
import { UserContext }from './Components/context';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from "react-router-dom";

function Spa() {
  return (
  <div>
    <HashRouter>
  <NavBar /> 
  <UserContext.Provider value={{users: [{name:'abel', email:'abel@mit.edu',password:'secret',balance:100}]}}>

  <Routes>
  <Route path="/" exact Component={Home} />
  <Route path="/CreateAccount" Component={CreateAccount}/>
      <Route path="/login" Component={Login} />
      <Route path="/deposit" Component={Deposit} /> 
      <Route path="/withdraw" Component={Withdraw} /> 
      <Route path="/balance" Component={Balance} /> 
      <Route path="/alldata" Component={Alldata} />
      </Routes>
      </UserContext.Provider>
      </HashRouter>
      </div>
  )
 }

export default Spa;
