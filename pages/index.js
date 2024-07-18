import Login from '../components/Login';
import Link from 'next/link'

function Index() {
  return (
  <>

  <Link href="/">Login</Link>&nbsp;
   <Link href="/home">Home</Link>&nbsp;
   <Link href="/hashtag">Hashtag</Link>

   <Login />;

   </>
  )
}

export default Index;
