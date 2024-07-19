import styles from '../styles/Trends.module.css';
import { useState ,useEffect } from 'react';
function Trends() {

  const [trendsData, setTrendsData] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:3000/tweets/")
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
        const formattedData = [] 
        data.result.map((e) => {
            for(let trend of e.trends)
            {
              
              if (formattedData.find((element) => {element == trend
              return false}))
              {
                formattedData.push(trend)
              }
              
            }
            
         
        });

        // récupérer uniquement les #
       console.log(formattedData)
     
      });
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
