import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { client } from "../stores/walletConfig";
import { WagmiConfig } from "wagmi";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <WagmiConfig client={client}>
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
          <meta
            property="twitter:url"
            content="https://web3blogs.netlify.app/"
          />
          <meta
            property="twitter:title"
            content="Wbe3blogs are platform store blogs in blockchain"
          />
          <meta
            property="twitter:description"
            content="Web3blogs are platforms of store blogs in Blockchain.Web3blogs are mostly web3, blockchain-related blogs read.Connect wallet using third party of wagmi.sh are used."
          />
          <meta property="twitter:image" content="/logo.svg" />

          <meta name="url" content="https://web3blogs.netlify.app/" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web3blogs are platforms of store blogs in Blockchain.Web3blogs are mostly web3, blockchain-related blogs read.Connect wallet using third party of wagmi.sh are used."
          />
          <link rel="apple-touch-icon" href="/logo.svg" />
          <title>web3Blogs</title>
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </WagmiConfig>
    </div>
  );
}

export default MyApp;
