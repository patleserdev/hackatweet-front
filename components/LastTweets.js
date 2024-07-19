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

  useEffect(() => {
    fetch("http://localhost:3000/tweets/")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const formattedData = data.result.map((e) => {
          const tweetObj = {
            tweet_id: e.tweet_id,
            firstname: e.authorFirstname,
            username: e.authorUsername,
            authorId: e.authorId,
            date: moment(e.date).startOf("minute").fromNow(),
            text: e.text,
            likeCount: e.likeCount,
            likeBy: e.likeBy,
            trends:e.trends
          };
          dispatch(addTweetsToStore(tweetObj));
        });
        // setTweetData(formattedData);
      });
  }, []);

  // delete option on token's tweets only
  const tweets = tweetData.map((data, i) => {
    return (
      <Tweet
        key={i}
        {...data}
        isLiked={data.likeBy.find((e) => e === userId) ? true : false}
        canDelete={data.authorId === userId ? true : false}
      />
    );
  });
  // console.log(tweets);

  return <div className={styles.lastTweetsContainer}>{tweets}</div>;
}

export default LastTweets;
