import styles from '../styles/Signup.module.css';

function SignUp() {

    // on click signup 
      //get inputs
      //fetch post new user
      // connect to the site
    return (
        <div className={styles.main}>
        <h1>SignUp</h1>
            <h2>Create your Hackatweet account</h2>
            <div className={styles.form}>
            <input type="text" id="fname" placeholder="Firstname"/>
            <input type="text" id="uname" placeholder="Username"/>
            <input type="password" id="password" placeholder="Password"/>
            <button>Sign up</button>
            </div>
        </div>
      );
    }
    
    export default SignUp;
    