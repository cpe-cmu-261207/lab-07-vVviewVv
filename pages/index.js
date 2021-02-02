import {useEffect} from 'react';
import axios from 'axios'
import Link from 'next/link'
const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  return (
    <>
      <h1>This is home page</h1>
      <Link href="post">
          <button>POST</button>
      </Link>
      <p>
      <Link href="cal">
          <button>CLA GPA</button>
      </Link>
      </p>
    </>
  )
}

export default Home
