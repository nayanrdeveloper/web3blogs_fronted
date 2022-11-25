import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { client } from "../stores/walletConfig";
import { WagmiConfig } from "wagmi";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <WagmiConfig client={client}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </WagmiConfig>
    </div>
  );
}

export default MyApp;
