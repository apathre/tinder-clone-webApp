import React,{useState} from 'react'
import './Login.css';
import auth from './auth/auth-helper';

function Login() {
  const [values,setValues]=useState({
      email:'',
      password:'',
      error:'',
      redirectToReferrer:false
  })
  
  const handleChange=name=>(e)=>{
      setValues({...values,[name]:e.target.value});
  }

  const onSubmit=(action,e)=>{
      //e.preventDefault();
       switch(action){
          case 'login':
              console.log('Login clicked');
              const signin=auth.signin(values);
              console.log('sign in is:',signin);
              break;
          case 'createAccount':
              console.log('create Account');
              const crAcc=auth.createAccount(values);
              console.log('crAcc is:',crAcc);
              break;
      }
  }
  

    return (
        <div className="login">
            <h2>Sign In</h2>
            <input type="text" 
             className="login_email"
             value={values.email}
             placeholder="Email"
             onChange={handleChange('email')}/>
             <input type="text" 
             className="login_password"
             value={values.password}
             placeholder="Password"
             onChange={handleChange('password')}/>
             <button className="login_button"
               onClick={()=>onSubmit('login')}>
                   Login
               </button>
             <button className="login_button" 
             onClick={()=>onSubmit('createAccount')}>
                 Create Account
             </button>
        </div>
    )
}

export default Login;
