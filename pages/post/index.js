import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api/post'

const Posts = () => {
    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect (() => {
        const fetch = async () => {
          setLoading(true)
          const response = await axios.get(
            baseURL ,
            {
              headers: {
                 'app-id': '6018cca1531eb262cae90217'
              }  
            })
          
          console.log(response.data)
          setPosts(response.data.data)
          setLoading(false)
        }
        fetch()
      },[])
/*`${baseURL}/post` */

    /*render() {
      const mystyle = {
        margin: '20px 0px 0px 0px'
      };*/

    return (
        <>
            <h1 style={{margin: '20px'}}>All Posts</h1>
            {loading && <p style={{margin: '20px'}}>Loading...</p>}
            {/*posts.map(post => 
                <p>{post.firsstName} {post.lastname}</p>
            )*/}
            <Link href="/">
              <button>Back</button>
            </Link>
            {
              posts.map(post => (
                <div style={{margin: '20px',padding: '0px'}}>
                  <p>post : {post.text}</p>
                  <img src={post.image} width='250px'/>
                  <p>Likes : {post.likes}</p>
                  <Link key={post.id} href={`/post/${post.id}`}>
                    <button>go to this page</button>
                  </Link>
                  <p>===================================================</p>
                </div>
              ))
            }
        </>
    )
}

export default  Posts