import Home from '../components/Home';
import Link from 'next/link'
function HomePage() {

  return (
  
    <>
    <Link href="/">Login</Link>&nbsp;
     <Link href="/home">Home</Link>&nbsp;
     <Link href="/hashtag">Hashtag</Link>
     
     <Home />;

     </>
  )

}

export default HomePage;
