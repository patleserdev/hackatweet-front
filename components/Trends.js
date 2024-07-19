import styles from '../styles/Trends.module.css';
import { useState ,useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

function Trends() {

 
  const [trendsData, setTrendsData] = useState([]);
  const tweetData = useSelector((state) => state.tweets.value);

  useEffect(() => {
  
            let formattedData=[]
            for(let onetweet of tweetData)
            {
              
              // if (formattedData.find((element) => {element == trend
              // return false}))
              // {
              //   formattedData.push(trend)
              // }
              console.log(onetweet.trends)
            }
            
         

        // récupérer uniquement les #
       
     
     
  }, []);


  const displayTrends=trendsData.map((element, i) => <li key={i}>{element.trends}</li>)
  
  return (
    <div style={{color:'#ffffff'}}>
      trends

      {displayTrends}
    </div>
  );
}

export default Trends;
