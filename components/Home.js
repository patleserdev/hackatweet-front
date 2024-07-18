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
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addUserToStore } from '../reducers/user';


function Home() {

  const router = useRouter()
  const dispatch = useDispatch();
  //const router = useRouter()

  const user = useSelector((state) => state.user.value);

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

          <LastTweets/>

        </div>
        <div className={styles.right}>

        <Trends/>
        </div>
          
        </main>
      </div>
    );
  
}

export default Home;
