/**
 * la page hashtag s’affiche lorsque l’utilisateur clique sur un des hashtags dans la section Trends. Cette action redirige vers une URL personnalisée reprenant le nom de la page et le nom du hashtag (par exemple: /hashtag/hello pour #hello).
*/
import styles from '../styles/Hashtag.module.css';


function Hashtag() {
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
    