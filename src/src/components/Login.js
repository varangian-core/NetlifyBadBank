import React from 'react';
import UserContext from './UserContext';
import Card from './Card';

function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  
    
  function validate(field, label){
      if (!field) {
          setStatus('Error: please enter ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
      }
      return true;
      }
    
  function handleLogin(){
      console.log(email,password);
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
       ctx.users.push({name,email,password,balance:100});
       setShow(false);
      }    
    
      function clearForm(){
        setEmail('');
        setPassword('');
        setShow(true);
      }
    
      return (
        <Card
          bgcolor="primary"
          header="Badbank Account Login"
          status={status}
          body={show ? (  
                  <>
                  Email address<br/>
                  <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                  Password<br/>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                  <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
                  </>
                ):(
                  <>
                  <h5>Success, Welcome to your account!</h5>
                  <button type="submit" className="btn btn-light" onClick={clearForm}>Login to Another Account</button>
                  </>
                )}
        />
      )
    }

  export default Login;