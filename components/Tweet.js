import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTweet } from "../reducers/tweets.js";
import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

function Tweet(props) {
  const [likeCount, setLikeCount] = useState(props.likeCount);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.value.token);

  let heartCustomStyle = { cursor: "pointer" };
  if (props.isLiked) {
    heartCustomStyle = { color: "#F81770", cursor: "pointer" };
  }

  let deleteCustomStyle = { cursor: "pointer" };

  const handleLikeButton = () => {
    // route to add or remove like
    fetch(`http://localhost:3000/tweets/${props.tweet_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: token, // A CHANGER QUAND USESELECTOR() DU STORE USER
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // change icon color depending on back-end response
        if (data.action === "removed") {
          setLikeCount(likeCount - 1);
          console.log(likeCount);
        } else if (data.action === "added") {
          setLikeCount(likeCount + 1);
          console.log(likeCount);
        }
      });
  };

  const handleDeleteButton = () => {
    fetch(`http://localhost:3000/tweets/${token}/${props.tweet_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // token: token, // A CHANGER QUAND USESELECTOR() DU STORE USER
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          dispatch(deleteTweet(props));
        }
      });
  };

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
          icon={faHeart}
          style={heartCustomStyle}
        />
        <span style={heartCustomStyle}>{props.likeCount}</span>
        {props.canDelete && (
          <FontAwesomeIcon
            onClick={() => {
              handleDeleteButton();
            }}
            className={styles.deleteIcon}
            icon={faTrash}
            style={deleteCustomStyle}
          />
        )}
      </div>
    </div>
  );
}

export default Tweet;
