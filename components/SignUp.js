import styles from '../styles/Signup.module.css';

import { useState } from 'react'

function SignUp() {

  const [inputFirstName, setInputFirstName] = useState('')
  const [inputUserName, setInputUserName] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  function SignUpNewUser()
  {
      // on click signup 
        //get inputs
        //console.log(inputFirstName,inputUserName,inputPassword)
        fetch('http://localhost:3000/users/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ firstname: inputFirstName,username: inputUserName, password: inputPassword }),
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
        
            <h2>Create your Hackatweet account</h2>
            <div className={styles.form}>
            <input className={styles.input} type="text" id="sufname" placeholder="Firstname" 
            onChange={(e) => setInputFirstName(e.target.value)} value={inputFirstName}/>
            
            <input className={styles.input} type="text" id="suuname" placeholder="Username" 
            onChange={(e) => setInputUserName(e.target.value)} value={inputUserName}/>

            <input className={styles.input} type="password" id="supassword" placeholder="Password" 
            onChange={(e) => setInputPassword(e.target.value)} value={inputPassword} />

            <button className={styles.button} onClick={() => { SignUpNewUser() }}>Sign up</button>
            <div style={{color:'red',marginTop:'10px'}}>{errorMessage}</div>
            </div>
        </div>
      );
    }
    
    export default SignUp;
    