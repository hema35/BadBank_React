import React from 'react';
import Card from './card';
import UserContext from './context';
import { Link, Navigate } from 'react-router-dom';

function Login() {
    const [submit, setSubmit] = React.useState(false);
    const [status, setStatus] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    // const ctx = React.useContext(UserContext);

    function validate(field, label){
        if(!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
      }

      function handleLogin() {      
            if(!validate(email,    'email')) return;
            if(!validate(password,  'password')) return;
            // ctx.users.push({email,password});
            setEmail("");
            setPassword("");
            setSubmit(true);
          
      }
    return (
        <div>
            <Card
            bgcolor = "primary"
            header = "Login"
            status ={status}
            body={ (
              <>
              Email address<br/>
              <input type="email" className='form-control' id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
              Password<br/>
              <input type="password" className='form-control' id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
              <button type='submit' disabled= {email === '' || password === ''} className='btn btn-light' onClick={handleLogin}>Login</button>
              </>
            ) 
          }
          />
        </div>
    );
}

export default Login;