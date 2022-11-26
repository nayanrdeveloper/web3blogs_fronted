import React, { useState } from "react";
import HeadingSection from "../components/Navbar/HeadingSection/HeadingSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClockLoader from "react-spinners/ClockLoader";
import {
  useAccount,
  useConnect,
  useEnsName,
  useDisconnect,
  useContract,
  useProvider,
  usePrepareContractWrite,
  useContractWrite,
  useSigner,
  useNetwork
} from "wagmi";
import { NFTStorage, File } from "nft.storage";
import blogAbi from "../ContractAbi/blogAbi";

function create_blog() {
  const sectionData = {
    title: "Create Blog",
  };
  interface categoryStruct{
    name: string;
    value: string;
  }
  const categoryList: categoryStruct[] = [
    {
      name: "NFT",
      value: "NFT",
    },
    {
      name: "Token",
      value: "Token",
    },
    {
      name: "Marketplace",
      value: "Marketplace",
    },
    {
      name: "Front-end",
      value: "Front-end",
    },
    {
      name: "Blockchain",
      value: "Blockchain",
    },
    {
      name: "Web3",
      value: "Web3",
    },
    {
      name: "DAO",
      value: "DAO",
    },
    {
      name: "Other",
      value: "Other",
    },
  ];

  interface blogDataStruct{
    title: string;
    category: string;
    description: string;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [blogData, setBlogData] = useState<blogDataStruct>({
    title: "",
    category: "blockchain",
    description: "",
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [image, setImage] = useState<any>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isConnected } = useAccount();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const provider = useProvider()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: signer, isError, isLoading } = useSigner();
  // eslint-disable-next-line react-hooks/rules-of-hooks
//   const { activeChain, switchNetwork} = useNetwork();
//   const currentChainId = activeChain?.id;
  const desiredChainId = 80001;
  const onchangeBlogInput = (event: any) => {
    setBlogData({
      ...blogData,
      [event.target.name]: event.target.value,
    });
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const contract = useContract({
    address: process.env.NEXT_PUBLIC_BLOG_CONTRACT,
    abi: blogAbi,
    signerOrProvider: signer,
  });

  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { config } = usePrepareContractWrite({
  //   addressOrName: process.env.NEXT_PUBLIC_BLOG_CONTRACT,
  //   contractInterface: ["function createNewBlog()"],
  //   functionName: "createNewBlog",
  //   args: [blogData.title, "hello", blogData.category],
  // });

//   const switchMeticNetwork =async () => {
//     if (currentChainId != desiredChainId){
//       await switchNetwork(desiredChainId)
//     }
//   }

  const submitBlog = async () => {
    if (!isConnected) {
      toast.info("Please Connect Wallet!!!");
    } else {
      if (!blogData.category || !blogData.title || !blogData.description) {
        toast.error("All Fields Are Required!!!");
      } else {
        setLoading(true);
        try {
          const imageURl = await uploadImageIPFS();
          console.log(imageURl);
          console.log(contract);
          // await switchMeticNetwork();
          let traction = await contract?.createNewBlog(
            blogData.title,
            imageURl,
            blogData.category
          );
          await traction.wait();

          console.log(traction);
          console.log("transaction are printed");
          setBlogData({
            title: "",
            category: "blockchain",
            description: "",
          });
          toast.success("Blogs are Successfully Added");
          setLoading(false);
        } catch (error: any) {
          toast.error(error.message);
          setLoading(false);
        }
      }
    }
  };

  const uploadImageIPFS = async () => {
    const nftStorage = new NFTStorage({
      token: process.env.NEXT_PUBLIC_NFT_STORAGE_KEY || "",
    });
    const link = await nftStorage.store({
      image: image,
      name: blogData.title,
      description: blogData.description,
      category: blogData.category,
    });
    const ipfsURL = `https://ipfs.io/ipfs/${link.url.substr(7)}`;
    return ipfsURL;
  };

  return (
    <div>
      <HeadingSection {...sectionData} />
      <ToastContainer
        theme="dark"
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
      <div className="mt-10 flex flex-col gap-3 bg-card-color mx-16 rounded-md py-5 px-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type={"text"}
            className="input-border"
            name="title"
            value={blogData.title}
            onChange={onchangeBlogInput}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="input-border h-20"
            name="description"
            value={blogData.description || ""}
            onChange={onchangeBlogInput}
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="input-border"
            name="category"
            value={blogData.category}
            onChange={onchangeBlogInput}
          >
            {categoryList.map((category) => {
              return (
                <option key={category.value} value={category.value}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="image">Upload Image</label>
          <input
            id="image"
            onChange={(e) => setImage(e.currentTarget.files && e.currentTarget.files[0])}
            type={"file"}
            className="input-border file:bg-transparent file:border-blue-primary file:border file:text-white file:rounded-md file:p-1"
          />
        </div>
        <div className="flex flex-col gap-2">
          <button
            disabled={loading}
            onClick={submitBlog}
            className={`wallet-button ${
              loading ? "w-44" : "w-32"
            } border-[#aa72ce] submit-ntn-shadow`}
          >
            <span className="flex items-center gap-2">
              {loading && <ClockLoader size={22} color="#fff" />}Submit Blog
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default create_blog;