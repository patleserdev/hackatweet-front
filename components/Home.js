/*
La page d’accueil est découpée en trois sections. 

La première à gauche affiche un logo qui fait aussi office de bouton pour revenir à cette page, 
les informations de l’utilisateur et un bouton logout. 

La partie du milieu sert à ajouter un tweet 
à voir le fil des tweets effectués par tous les utilisateurs ("Last tweets"). 

La partie de droite affiche les "Trends", c'est-à-dire tous les hashtags qui ont été utilisés et le nombre de fois qu’ils l’ont été.
*/
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

import LastTweets from './LastTweets'
import Trends from './Trends'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addUserToStore } from '../reducers/user';


function Home() {

  const router = useRouter()
  const dispatch = useDispatch();
  //const router = useRouter()

  const user = useSelector((state) => state.user.value);
  const [inputAddTweet,setInputAddTweet]=useState('')

  useEffect(() => {
  if (!user.token)
  {
    
    router.push('/') 
  }
  }, []);


    //deconnexion et retour sur page login
    function handeLogout(){
      dispatch(addUserToStore({}));
      router.push('/')     
    }

    function handleAddTweet()
    {
      // récupérer l'input
      const pattern=/([@][A-z]+)|([#][A-z]+)/g
      let trends=inputAddTweet.match(pattern);
      let splitted = inputAddTweet.split(pattern)
      console.log(splitted)
      // si inputAddTweet.length supérieur à 280 : message d'erreur --- traité dans la vue
      // trier les données - le content - les trends 
      // fetch les trends 
      // récupérer dans un tableau les id des trends
      // fetch le nouveau tweet avec le tableau de trends
      // afficher le tweet
      // alimenter le tableau des trends

    }
   


    return (
      <div>
        <main className={styles.main}>
        
        <div className={styles.left}>
        <div className={styles.logo}>
        
        <Link href='/home'>
          <Image className={styles.logoImg} title="Go to home page" src="/pictures/grand-logo-twitter.png" alt="logo" 
          width={50} height={50} />
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
          <h2>Home</h2>
          <div className={styles.newtweet}>
            <div className={styles.newtweetbox}>
            <input className={styles.input} type="text" id="addtwwet" placeholder="What's up ?" 
            onChange={(e) => setInputAddTweet(e.target.value)} value={inputAddTweet}/>
            </div>
            <div className={styles.newtweetactions}>
            { inputAddTweet.length > 280 &&<div className={styles.error}>Trop de caractères !!!</div>}
               <div>{inputAddTweet.length}/280</div>
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

export default Home;
