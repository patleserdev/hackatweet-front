/*
La page d’accueil est découpée en trois sections. 

La première à gauche affiche un logo qui fait aussi office de bouton pour revenir à cette page, 
les informations de l’utilisateur et un bouton logout. 

La partie du milieu sert à ajouter un tweet 
à voir le fil des tweets effectués par tous les utilisateurs ("Last tweets"). 

La partie de droite affiche les "Trends", c'est-à-dire tous les hashtags qui ont été utilisés et le nombre de fois qu’ils l’ont été.
*/
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Home
        </h1>
      </main>
    </div>
  );
}

export default Home;
