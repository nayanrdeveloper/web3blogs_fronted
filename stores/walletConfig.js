import {
    WagmiConfig,
    createClient,
    defaultChains,
    configureChains,
    useDisconnect,
    Chain
  } from 'wagmi'

  
  import { alchemyProvider } from 'wagmi/providers/alchemy'
  import { publicProvider } from 'wagmi/providers/public'
  
  import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
  import { InjectedConnector } from 'wagmi/connectors/injected'
  import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
  import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
  // require("dotenv").config({ path: ".env" });
  
  const avalancheChain = {
    id: 80_001,
    name: 'Mumbai',
    network: 'mumbai',
    nativeCurrency: {
      decimals: 18,
      name: 'matic',
      symbol: 'MATIC',
    },
    rpcUrls: {
      default: 'https://matic-mumbai.chainstacklabs.com',
    },
    blockExplorers: {
      default: { name: 'SnowTrace', url: 'https://mumbai.polygonscan.com/' },
    },
    testnet: true,
  }

  const { chains, provider, webSocketProvider } = configureChains([avalancheChain], [
    alchemyProvider({ apiKey: "k2FoR-gXCIDxv56ryt8v3fYbC_V-uOT5" }),
    publicProvider(),
  ])
  
  // Set up client
  export const client = createClient({
    autoConnect: false,
    connectors: [
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: 'wagmi',
        },
      }),
      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
        },
      }),
      new InjectedConnector({
        chains,
        options: {
          name: 'Injected',
          shimDisconnect: true,
        },
      }),
    ],
    provider,
    webSocketProvider,
  })