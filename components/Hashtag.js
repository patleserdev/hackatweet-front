/**
 * la page hashtag s’affiche lorsque l’utilisateur clique sur un des hashtags dans la section Trends. Cette action redirige vers une URL personnalisée reprenant le nom de la page et le nom du hashtag (par exemple: /hashtag/hello pour #hello).
*/
import styles from '../styles/Hashtag.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';

function Hashtag() {

  const router = useRouter()
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    if (!user.token)
    {
      router.push('/') 
    }
    }, []);

    return (
        <div>
          <main className={styles.main}>
        
            <h1 className={styles.title}>
              Welcome to hashtag
            </h1>
          </main>
        </div>
      );
    }
    
    export default Hashtag;
    