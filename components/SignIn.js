import styles from '../styles/Signin.module.css';


function SignIn() {

    // on click signup 
      //get inputs
      //fetch post user exists ?
      // connect to the site

    return (
      <div className={styles.main}>
      <h1>SignIn</h1>
          <h2>Connect to Hackatweet </h2>
          <div className={styles.form}>
          <input type="text" id="uname" placeholder="Username"/>
          <input type="password" id="password" placeholder="Password"/>
          <button>Sign in</button>
          </div>
      </div>
      );
    }
    
    export default SignIn;
    