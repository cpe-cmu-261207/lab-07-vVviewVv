import {useRouter} from "next/router";
import {useEffect,useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
const baseURL = 'https://dummyapi.io/data/api'

const Post = () => {
    const router = useRouter()
    const {postId} = router.query
    const [post,setPost] = useState(null)
    const [comment,setComment] = useState([])

    const fetch = async () => {
        if(postId){
            const response = await axios.get(
                `${baseURL}/post/${postId}`,
            {
              headers: {
                 'app-id' : '6018cca1531eb262cae90217'
              }  
        })
        console.log(response.data)
        setPost(response.data)
        }
    } 
    useEffect(fetch,[postId])

    useEffect (() => {
        const fetch = async () => {
          const response = await axios.get(
            `${baseURL}/post/${postId}/comment` ,
            {
              headers: {
                 'app-id': '6018cca1531eb262cae90217'
              }  
            })
          
          console.log(response.data)
          setComment(response.data.data)
        }
        fetch()})


    return (
        <>
            <h1>display post data from api here</h1>
            {post !== null ? (
                <div style={{margin: '20px',padding: '0px'}}>
                <p>tags : {post.tags }</p>
                <img src={post.image} width='250px'/>
                <p>{post.owner.firstName} {post.owner.lastName}</p>
                <p>Likes : {post.likes}</p>
                <p><strong>Comments</strong></p>
                {
                    comment.map( item => (
                        <p>
                            {item.owner.firstName} {item.owner.lastName} : {item.message}
                        </p>
                    ))
                }
                </div>
            ):null}
            <Link href="/post">
                Back
            </Link>
        </>
    )
}

export  default  Post
