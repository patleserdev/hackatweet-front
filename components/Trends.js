import styles from '../styles/Trends.module.css';
import { useState ,useEffect } from 'react';
import Link from 'next/link'
import { useSelector } from "react-redux";

function Trends() {
  const [trendsData, setTrendsData] = useState([]);
  const tweetData = useSelector((state) => state.tweets.value);

  useEffect(() => {
            let formattedData=[]
            for(let onetweet of tweetData)
            {
              for(let trend of onetweet.trends)
              {
                if (trend != '')
                {
                  const found=formattedData.some((element) => element.trend === trend)
                 // console.log(found)
                  if(!found)
                  {
                    formattedData.push({trend : trend, nbTweet : 1})   
                  }
                  // else
                  // {
                  //   let index=formattedData.findIndex(element => element.trend === trend)
                  //   formattedData[index].nbTweet++
                  //   //console.log(index)
                  // }
                }  
              }
            }
            // ajouter le nombre de tweets concernés

            setTrendsData(formattedData)
  }, []);


  const displayTrends=trendsData.map((element, i) => 
  <div className={styles.onetrend} key={i}>
    <div className={styles.trend}><Link href={'/hashtag/'+element.trend} >{element.trend}</Link></div>
    <div className={styles.nbtweets}>{element.nbTweet} Tweet(s)</div> 
    </div>)
  
  return (
    <div style={{color:'#ffffff'}}>

      {displayTrends}
    </div>
  );
}

export default Trends;
