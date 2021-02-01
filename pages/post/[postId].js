import {useRouter} from "next/router";
import {useEffect,useState} from 'react'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const Post = () => {
    const router = useRouter()
    const {postId} = router.query
    const [post,setPost] = useState(null)
    const [comment,setComment] = useState([])

    return (
        <>
            <h1>display post data from api here</h1>
        </>
    )
}

export  default  Post

