import React from 'react';
import UserContext from './context';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Card from "./card";

function CreateAccount() {
const [show, setShow]   = React.useState(true);
const [status, setStatus] = React.useState('');
const [name, setName] = React.useState('');
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const [submitting, setSubmitting] = React.useState(true);
const ctx = React.useContext(UserContext);

function validate(field, label){
  if(!field) {
    setStatus('Error: ' + label);
    alert('Error: ' + label)
    return false;
  }
  if(label === 'password' && field.length <  8) {
    setStatus('Error: check length of ' + label);
    alert('Error: check length of ' + label);
    return false;
  }
  return true;
}



function handleCreate(){
  if(!validate(name,    'name')) return;
  if(!validate(email,    'email')) return;
  if(!validate(password,  'password')) return;
  ctx.users.push({name, email, password, balance: 100});
  setShow(false);
}
function clearForm(){
  setName('');
  setEmail('');
  setPassword('');
  setShow(true);
  setSubmitting(false);
}
return (


  // <Card
  //   bgcolor = "primary"
  //   header = "Create Account"
  //   status ={status}
  //   body={show ? (
  //     <>
  //     Name<br/>
  //     <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
  //     Email address<br/>
  //     <input type="input" className='form-control' id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
  //     Password<br/>
  //     <input type="password" className='form-control' id="password" placeholder="Enter password" value={password} onChange={e => {setPassword(e.currentTarget.value)}} /><br/>
  //     <button type='submit' disabled={!(name !== '' || email !== '' || password.length > 8)} className='btn btn-light' onClick={handleCreate}>Create Account</button>
  //     </>
  //   ) : (
  //     <>
  //     <h5>Success</h5>
  //     <button type='submit' className='btn btn-light' onClick={clearForm}>Add another account</button>
  //     </>
  //   )
  
  // }
  // />

    <Card
    bgcolor = "primary"
    header = "Create Account"
    status ={status}
    body={show ? (
      <>
      <Formik
         initialValues={{ name: "", email: "", password: "" }}
         validate={(values) => {
           const errors = {};
           if (!values.name) {
             errors.name = "Required";
           }

           if (!values.email) {
             errors.email = "Required";
           } else if (
             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
           ) {
             errors.email = "Invalid email address";
           }
           if (!values.password) {
             errors.password = "Required";
            } else if (
              /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.match(values.password)
            ) {
              errors.email = "Invalid pwd. Atleast 8 characters";
            }
           return errors;
         }}
         onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            handleCreate();
            setSubmitting(false);
          }, 4000);
        }}
       >
        
         {(props) => (
           <form>
             <input
               type="text"
               name="name"
               className="form-control field"
               placeholder="Enter your name"
               onChange={e => setName(e.currentTarget.value)}
             />

             <input
               type="email"
               name="email"
               className="form-control field"
               placeholder="Enter email address"
               onChange={e => setEmail(e.currentTarget.value)}
             />

             <input type="password" name="password" className="form-control field" placeholder="Password" onChange={e => {setPassword(e.currentTarget.value)}}/>
             {props.errors.name && <div id="feedback">{props.errors.name}</div>}
             <button type="submit" disabled={!(name !== '' || email !== '' || password.length > 8)} className="form-control button" onClick={handleCreate}>
               Create Account
             </button>
           </form>
         )}
       </Formik>
      </>
    ) : (
      <>
      <h5>Success</h5>
      <button type='submit' className='btn btn-light' onClick={clearForm}>Add another account</button>
      </>
    )
  
  }
  />


)
}

export default CreateAccount;