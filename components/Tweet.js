import { useState } from "react";
import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

function Tweet(props) {
  const [likeCount, setLikeCount] = useState(props.likeCount);

  let heartCustomStyle;
  // const handleLikeButton = () => {
  //   // route to add or remove like
  //   fetch(`http://localhost:3000/tweets/${props.tweet_id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       token: token, // A CHANGER QUAND USESELECTOR() DU STORE USER
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // change icon color depending on back-end response
  //       if (data.action === "removed") {
  //         heartCustomStyle = { cursor: "pointer" };
  //         setLikeCount(likeCount - 1);
  //       } else if (data.action === "added") {
  //         heartCustomStyle = { color: "#F81770", cursor: "pointer" };
  //         setLikeCount(likeCount + 1);
  //       } else {
  //       }
  //     });
  // };

  // const handleDeleteButton = () => {
  //   // fetch route to delete !!!
  // };

  return (
    <div className={styles.tweet}>
      <div className={styles.profileSection}>
        <FontAwesomeIcon className={styles.profileIcon} icon={faUser} />
        <span className={styles.profileFirstname}>{props.firstname}</span>
        <span className={styles.profile}>@{props.username} ⸱</span>
        <span className={styles.profiledate}> {props.date}</span>
      </div>
      <div className={styles.textSection}>{props.text}</div>
      <div className={styles.likeSection}>
        <FontAwesomeIcon
          onClick={() => handleLikeButton()}
          className={styles.likeIcon}
          style={heartCustomStyle}
          icon={faHeart}
        />
        {props.likeCount}
        {props.canDelete && (
          <FontAwesomeIcon
            onClick={() => {
              handleDeleteButton();
            }}
            className={styles.likeIcon}
            icon={faTrash}
          />
        )}
      </div>
    </div>
  );
}

export default Tweet;
