import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'

const Posts = () => {
    const [posts,setPosts] = useState([])

    return (
        <>
            <h1>All Posts</h1>
        </>
    )
}

export default  Posts
