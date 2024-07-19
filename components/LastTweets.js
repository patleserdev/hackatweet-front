import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTweetsToStore } from "../reducers/tweets.js";
import styles from "../styles/Lasttweets.module.css";
import Tweet from "./Tweet.js";
import moment from "moment";

function LastTweets() {
  const dispatch = useDispatch();
  // const [tweetData, setTweetData] = useState([]);
  const userId = useSelector((state) => state.user.value.userid);
  const tweetData = useSelector((state) => state.tweets.value);


  // delete option on token's tweets only

  const tweets = tweetData.map((data, i) => 
      <Tweet
        key={i}
        {...data}
        isLiked={data.likeBy.length > 0 ? true : false}
        canDelete={data.authorId === userId ? true : false}
      />

  )

  return <div className={styles.lastTweetsContainer}>{tweets}</div>;
}

export default LastTweets;
