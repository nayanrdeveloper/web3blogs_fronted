import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BlogList from "../components/Blogs/BlogList";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/logo.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="web3,blockchain,nft,solidity,storage,dao,blog,blogs"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://web3blogs.netlify.app/" />
        <meta
          property="og:title"
          content="Wbe3blogs are platform store blogs in blockchain"
        />
        <meta
          property="og:description"
          content="Web3blogs are platforms of store blogs in Blockchain.Web3blogs are mostly web3, blockchain-related blogs read.Connect wallet using third party of wagmi.sh are used."
        />
        <meta
          property="og:image"
          content="https://web3blogs.netlify.app/logo.svg"
        />

        <meta name="language" content="ES" />
        <meta
          name="author"
          content="Nayan Radadiya, nayanrdeveloper@gmail.com"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://web3blogs.netlify.app/" />
        <meta
          property="twitter:title"
          content="Wbe3blogs are platform store blogs in blockchain"
        />
        <meta
          property="twitter:description"
          content="Web3blogs are platforms of store blogs in Blockchain.Web3blogs are mostly web3, blockchain-related blogs read.Connect wallet using third party of wagmi.sh are used."
        />
        <meta property="twitter:image" content="/logo-no-background.png" />

        <meta name="url" content="https://web3blogs.netlify.app/" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web3blogs are platforms of store blogs in Blockchain.Web3blogs are mostly web3, blockchain-related blogs read.Connect wallet using third party of wagmi.sh are used."
        />
        <link rel="apple-touch-icon" href="/logo-no-background.png" />
        <title>web3Blogs</title>
      </Head>
      <BlogList />
    </div>
  );
};

export default Home;
