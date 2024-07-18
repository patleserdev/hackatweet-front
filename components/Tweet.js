import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons";

function Tweet(props) {
  return (
    <div className={styles.tweet}>
      <div className={styles.profileSection}>
        <FontAwesomeIcon className={styles.profileIcon} icon={faUser} />
        <span className={styles.profileFirstname}>{props.firstname}Elisa</span>
        <span className={styles.profile}>@{props.username}elisapseudo ⸱</span>
        <span className={styles.profile}> {props.date}A few seconds ago</span>
      </div>
      <div className={styles.textSection}>{props.text}blablablabla</div>
      <div className={styles.likeSection}>
        <FontAwesomeIcon className={styles.likeIcon} icon={faHeart} />
        {props.likeCount}0
      </div>
    </div>
  );
}

export default Tweet;
