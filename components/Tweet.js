import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTweet,addTweetsToStore } from "../reducers/tweets.js";
import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

function Tweet(props) {
  const [likeCount, setLikeCount] = useState(props.likeCount);
  const [likeBy, setLikeBy] = useState(props.likeBy);
  const [heartCustomStyle, setHeartCustomStyle] = useState({ cursor: "pointer" });
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);


  useEffect(() => {
    if (likeBy.length > 0)
    {
      if (likeBy.find((element) => element === user.userid ))
      {
      setHeartCustomStyle({ color: "#F81770", cursor: "pointer" });
      }
    }
 
}, [likeCount]);
  
  


  let deleteCustomStyle = { cursor: "pointer" };

  const handleLikeButton = () => {

    // route to add or remove like
    fetch(`http://localhost:3000/tweets/${user.token}/${props.tweet_id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: user.token, // A CHANGER QUAND USESELECTOR() DU STORE USER
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // change icon color depending on back-end response
        if (data.action === "removed") {
          setLikeCount(likeCount - 1);
          setHeartCustomStyle({cursor: "pointer" })
          setLikeBy(likeBy.filter((element) => {element != user.userid}))
        } else if (data.action === "added") {
          setLikeCount(likeCount + 1);
          setHeartCustomStyle({ color: "#F81770", cursor: "pointer" })
          setLikeBy([...likeBy,user.userid])
        }
      });
  };

  const handleDeleteButton = () => {
    fetch(`http://localhost:3000/tweets/${user.token}/${props.tweet_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {

          dispatch(deleteTweet(props.tweet_id));
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
        <span style={heartCustomStyle}>{likeCount}</span>
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
