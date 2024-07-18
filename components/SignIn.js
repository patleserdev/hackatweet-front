import styles from '../styles/Signin.module.css';
import { useState } from 'react'

import { useDispatch } from 'react-redux';
import { addUserToStore } from '../reducers/user';

import { useSelector } from 'react-redux';

import { useRouter } from 'next/router'
 
function SignIn() {

  const router = useRouter()

  const dispatch = useDispatch();

  const [inputUserName, setInputUserName] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState('')
  const user = useSelector((state) => state.user.value)
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
          //console.log(data)
          if (!data.result)
          {
            setErrorMessage(data.error)
          }
          else
          {
            setErrorMessage('')
            // connect to the site
            
            if (dispatch(addUserToStore({firstname:data.firstname,username:data.username,token:data.token})))
            {   
             // console.log(user)
              
              router.push('/home')            
            }

           
          }
        })
      
  }

    return (
      <div className={styles.main}>
     
          <h2>Connect to Hackatweet </h2>
          <div className={styles.form}>
          <input className={styles.input} type="text" id="siuname" placeholder="Username" 
          onChange={(e) => setInputUserName(e.target.value)} value={inputUserName}/>

          <input className={styles.input} type="password" id="sipassword" placeholder="Password" 
          onChange={(e) => setInputPassword(e.target.value)} value={inputPassword}/>

          <button className={styles.button} onClick={() => { SignInUser() }}>Sign in</button>
          <div style={{color:'red',marginTop:'10px'}}>{errorMessage}</div>
          </div>
          
          
      </div>
      );
    }
    
    export default SignIn;
    