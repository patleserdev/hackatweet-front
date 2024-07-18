/*
La page login vous permet de vous créer un compte ou de vous connecter à l’application. 
Au clic sur les boutons "Sign up" ou "Sign in", une modale doit s’ouvrir avec les champs de saisie correspondants à l’action effectuée.

Au clic sur le bouton dans la modale, l’application communique avec les backends et si les informations sont correctes, l’utilisateur est redirigé vers le composant Home. Dans le cas d’un Sign up, les informations de l’utilisateur sont enregistrées en BDD.
*/
import styles from '../styles/Login.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import Signin from './SignIn'
import SignUp from './SignUp.js';
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

function Login() {

  const [modal,setModal]=useState(false)

  const [displaySignUp,setDisplaySignUp]=useState(false)
  const [displaySignIn,setDisplaySignIn]=useState(false)

  function openSignUp(){
    setModal(true)
    setDisplaySignUp(true)
    setDisplaySignIn(false)
  }

  function openSignIn(){
    setModal(true)
    setDisplaySignIn(true)
    setDisplaySignUp(false)
  }
  
    return (
        <div>
          <main className={styles.main}>
            

            { modal && <div className={styles.modal}>


              <div className={styles.modalBox}>

              <FontAwesomeIcon onClick={() => {setModal(false)}} className={styles.close} icon={faXmark} />

                <div className={styles.signBlock}>
                <Image title="Go to login page" src="/pictures/grand-logo-twitter.png" alt="logo" 
                className={styles.logo} width={50} height={50} />

                { displaySignUp && <SignUp/> }

                { displaySignIn &&  <Signin/>}
                </div>
              </div>

            </div>}

        

            <div className={styles.left}></div>

            <div className={styles.right}>
              <div>
                
                  <Image title="Go to login page" src="/pictures/grand-logo-twitter.png" alt="logo" className={styles.logo} width={50} height={50} />
                
              </div>
              <h1 className={styles.title}>
                See what's happening
              </h1>

              <h2>Join Hackatweet today.</h2>

              <button onClick={()=> {openSignUp()} } className={styles.blueButton}>Sign up</button>
              <p> Already have an account</p>
              <button onClick={()=> {openSignIn()} } className={styles.classicButton}>Sign in</button>

             

              

            </div>

          
          </main>
        </div>
      );
    }
    
    export default Login;
    