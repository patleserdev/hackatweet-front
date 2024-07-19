import { useEffect, useState } from "react";
import styles from "../styles/Lasttweets.module.css";
import Tweet from "./Tweet.js";
import moment from "moment";

function LastTweets() {
  const [tweetData, setTweetData] = useState([]);
  console.log(tweetData);

  useEffect(() => {
    fetch("http://localhost:3000/tweets/")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const formattedData = data.result.map((e) => {
          return {
            tweet_id: e.tweet_id,
            firstname: e.authorFirstname,
            username: e.authorUsername,
            date: moment(e.date).startOf("minute").fromNow(),
            text: e.text,
            likeCount: e.likeCount,
          };
        });
        setTweetData(formattedData);
      });
  }, []);

  // delete option on token's tweets only
  // TO BE CONTINUED (ACCESS USER_ID FROM FETCH AND FROM STORE)
  const tweets = tweetData.map((data, i) => {
    const canDelete = tweetData.some((e) => {
      return "yi";
    });

    return <Tweet key={i} {...data} />;
  });

  return <div>{tweets}</div>;
}

export default LastTweets;
