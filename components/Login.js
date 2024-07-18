/*
La page login vous permet de vous créer un compte ou de vous connecter à l’application. 
Au clic sur les boutons "Sign up" ou "Sign in", une modale doit s’ouvrir avec les champs de saisie correspondants à l’action effectuée.

Au clic sur le bouton dans la modale, l’application communique avec les backends et si les informations sont correctes, l’utilisateur est redirigé vers le composant Home. Dans le cas d’un Sign up, les informations de l’utilisateur sont enregistrées en BDD.
*/
import styles from '../styles/Login.module.css';

import Signin from './SignIn'
import SignUp from './SignUp.js';

function Login() {
    return (
        <div>
          <main className={styles.main}>

            <div className={styles.left}></div>

            <div className={styles.right}>

              <h1 className={styles.title}>
                Welcome to login
              </h1>

              <Signin/>

              <SignUp/>

            </div>

          
          </main>
        </div>
      );
    }
    
    export default Login;
    