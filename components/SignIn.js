import styles from '../styles/Signin.module.css';

import { useState } from 'react'

function SignIn() {

  const [inputUserName, setInputUserName] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState('')
  

  function SignInUser()
  {
        // on click 
          // si user exist connect
          // sinon error message

        fetch('http://localhost:3000/users/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({username: inputUserName, password: inputPassword }),
        })
        .then(response => response.json())
        .then((data)=> {
          console.log(data)
          if (!data.result)
          {
            setErrorMessage(data.error)
          }
          else
          {
            // connect to the site
          }
        })
      
  }

    return (
      <div className={styles.main}>
      <h1>SignIn</h1>
          <h2>Connect to Hackatweet </h2>
          <div className={styles.form}>
          <input type="text" id="siuname" placeholder="Username" onChange={(e) => setInputUserName(e.target.value)} value={inputUserName}/>
          <input type="password" id="sipassword" placeholder="Password" onChange={(e) => setInputPassword(e.target.value)} value={inputPassword}/>
          <button onClick={() => { SignInUser() }}>Sign in</button>
          <div style={{color:'red',marginTop:'10px'}}>{errorMessage}</div>
          </div>
          
          
      </div>
      );
    }
    
    export default SignIn;
    