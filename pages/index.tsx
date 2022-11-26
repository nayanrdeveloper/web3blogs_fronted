import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BlogList from '../components/Blogs/BlogList'


const Home: NextPage = () => {
  return (
    <div>
       <BlogList />
    </div>
  )
}

export default Home
