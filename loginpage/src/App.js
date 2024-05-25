import profile from './image/a.png';
import emailimg from './image/emailimg.png';
import pass from './image/pass.png';
import './App.css';
import React, { useState } from 'react';
import bcryp from 'bcryptjs';
function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [loginMessage, setLoginMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    if(Object.keys(errors).length === 0){
      alert("Done");
    }
  }

  const validate = () => {
    const error = {};
    

    if (!email){
      error.email = "Username is Required";
    }
    else if(!/\S+@\S+\.\S+/.test(email)){
      error.email = "Username not Matched";
    }
    else{
      error.email = "";
    }

    if (!password){
      error.password = "Password is Required";
    }
    else if(password.length < 8){
      error.password = "Password lenght must be greater than 8";
    }
    else if(!/(?=.*?[A-Z])/.test(password)){
      error.password = "Password must have one Uppercase letter";
    }
    else if(!/(?=.*?[a-z])/.test(password)){
      error.password = "Password must have one Lowercase letter";
    }
    else if(!/(?=.*?[0-9])/.test(password)){
      error.password = "Password must have one number";
    }
    else if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
      error.password = "Password must have one special charater";
    }
    else{
      error.password = "";
    }

    return error;
  }
  const handleLogin = () => {
    if (email === 'aafreen@gmail.com' && password === 'Aafreen@2002'){
      alert('Login Successful!')
    }
    else{
      alert('Invalid Username or password')
    }
  };
  return (
    <div className='main'>
      <div className='sub-main'>
        <div>
          <div className='img'>
            <div className='container-image'>
              <img src={profile} alt='profile' className='profile'/>
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
            <div>
              {<img src={emailimg} alt='email' className='email' />}
              <input type='email' placeholder='user name' className='name' onChange={(e) => setEmail(e.target.value)}/>
              {errors.email && <div className='error'>{errors.email}</div>}
            </div>
            <div className='second-input'>
              <img src={pass} alt='password' className='email' />
              <input type='password' placeholder='password' className='password' onChange={(e) => setPassword(e.target.value)}/>
              {errors.password && <div className='error'>{errors.password}</div>}
            </div>
            <div className='login-button'>
            <button onClick={handleLogin}>Login</button>
            </div>
            <div id="login-message">{loginMessage}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
