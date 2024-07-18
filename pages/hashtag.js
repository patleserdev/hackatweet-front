import Hashtag from '../components/Hashtag.js';
import Link from 'next/link'

function HashtagPage() {
 
  return (
  
    <>
    <Link href="/">Login</Link>&nbsp;
     <Link href="/home">Home</Link>&nbsp;
     <Link href="/hashtag">Hashtag</Link>
     
     <Hashtag />;

     </>
  )

}

export default HashtagPage;
