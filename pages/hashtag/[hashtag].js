import { useRouter } from 'next/router.js';
import Hashtag from '../../components/Hashtag.js';
import Link from 'next/link'

function HashtagPage() {

  const router=useRouter()
  console.log(router.query)

  return (
    <>
     
     <Hashtag />;

     </>
  )

}

export default HashtagPage;
