/**
 * la page hashtag s’affiche lorsque l’utilisateur clique sur un des hashtags dans la section Trends. Cette action redirige vers une URL personnalisée reprenant le nom de la page et le nom du hashtag (par exemple: /hashtag/hello pour #hello).
*/
import styles from '../styles/Hashtag.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import Link from 'next/link'
import Image from 'next/image';
import LastTweets from './LastTweets.js';
import Trends from './Trends.js';

function Hashtag() {

  const router = useRouter()
  const user = useSelector((state) => state.user.value);
  const [inputSearchTweet,setInputSearchTweet]=useState('')
 
  // useEffect(() => {
  //   if (!user.token)
  //   {
  //     router.push('/') 
  //   }
  //   }, []);
  
    return (
<div>
<main className={styles.main}>

<div className={styles.left}>
<div className={styles.logo}>

  <Link href='/home'>
  <div>
  <Image className={styles.logoImg} title="Go to home page" src="/pictures/grand-logo-twitter.png" alt="logo" 
  width={50} height={50} />
  </div>
  </Link>

  
  </div>

  <div className={styles.bottomBox}>
    <div className={styles.userInfo}>
    
    <FontAwesomeIcon className={styles.avatar} icon={faUser} />
    <div className={styles.userInfoContent}>
    <div className={styles.firstname}>{user.firstname}</div>
    <div className={styles.username}>@{user.username}</div>
    
    </div>
    </div>
    <button className={styles.logout} onClick={()=> {handeLogout()}} >Logout</button>
  
  </div>

</div>

<div className={styles.center}>
  <h2>Hashtag #{router.query.hashtag}</h2>
  <div className={styles.newtweet}>
    <div className={styles.newtweetbox}>
   
    <input className={styles.input} type="text" id="addtwwet" placeholder="type your #Hackatweet" 
    onChange={(e) => setInputSearchTweet(e.target.value)} value={inputSearchTweet}/>
    </div>
    <div className={styles.newtweetactions}>
    { inputSearchTweet && <div className={styles.error}></div>}
      
      <div><button className={styles.tweetbutton} onClick={()=>{handleAddTweet()}}>Tweet</button></div>

    </div>
  </div>

  <LastTweets/>

</div>
<div className={styles.right}>
<h2>Trends</h2>

<Trends/>
</div>
  
</main>
</div>
      );
    }
    
    export default Hashtag;
    