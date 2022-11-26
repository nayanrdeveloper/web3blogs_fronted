import React, { useState } from "react";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useAccount, useConnect, useEnsName, useDisconnect } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
// import { shortAddress } from "../../utils/shortenAddress";
import { ToastContainer, toast } from "react-toastify";
import shortAddress from "../../utils/shortenAddress"

function NavRIght() {
  const [openModal, setOpenModal] = useState(false);
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  const walletList = [
    {
      name: "MetaMask",
      link: "",
    },
    {
      name: "CoinBase",
      link: "",
    },
    {
      name: "walletConnect",
      link: "",
    },
  ];
  return (
    <div className="">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <div className="flex gap-2 items-center">
        {isConnected ? (
          <div className="flex gap-2 items-center">
            <span className="p-2 wallet-button">{shortAddress(address)}</span>
            <button
              onClick={() => disconnect()}
              className="wallet-button flex items-center gap-2 relative"
            >
              <MdOutlineAccountBalanceWallet className="text-2xl" />
              <span>DisConnect</span>
            </button>
          </div>
        ) : (
          <button
            onClick={() => setOpenModal(!openModal)}
            className="wallet-button flex items-center gap-2 relative"
          >
            <MdOutlineAccountBalanceWallet className="text-2xl" />
            <span>Connect</span>
            <div
              className={`absolute top-12 bg-card-color rounded-md z-10 -left-2 ${
                openModal ? "" : "invisible"
              }`}
            >
              <ul className="flex flex-col p-4 gap-2">
                {connectors.map((connector) => {
                  return (
                    <li
                      key={connector.name}
                      className="hover:text-blue-primary duration-300"
                    >
                      <span onClick={() => connect({ connector })}>
                        {connector.name}
                      </span>
                      
                    </li>
                  );
                })}
              </ul>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default NavRIght;
