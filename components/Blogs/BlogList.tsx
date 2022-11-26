import React, { useEffect, useState } from "react";
import axios from "axios";
import HeadingSection from "../Navbar/HeadingSection/HeadingSection";
import BlogCard from "./BlogCard";
import { ToastContainer, toast } from "react-toastify";
import blogAbi from "../../ContractAbi/blogAbi";
import "react-toastify/dist/ReactToastify.css";
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
  useNetwork,
} from "wagmi";

function BlogList() {
  const sectionData = {
    title: "Our Blogs",
  };

  const { isConnected } = useAccount();
  const { data: signer, isError, isLoading } = useSigner();
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(false);

  //   const provider = useProvider();
  const contract = useContract({
    address: process.env.NEXT_PUBLIC_BLOG_CONTRACT,
    abi: blogAbi,
    signerOrProvider: signer,
  });

  const [blogList, setBlogList] = useState<any>([]);

  useEffect(() => {
    if (signer) {
        console.log(signer);
      fetchAllBlogs();
    }
  },[signer]);

  const fetchAllBlogs = async () => {
    if (isConnected) {
      setIsLoadingBlogs(true);
      let blogData = await contract?.getAllBlogs();
      const data = await Promise.all(
        blogData.map(async (d: any) => {
          const meta = await axios.get(d.blogUrl);
          const timestamp = d.timestamp.toNumber();
          const dateTime = new Date(timestamp);
          const blogId = d.blogId.toNumber();
          const imageUrl = `https://ipfs.io/ipfs/${meta.data.image.substr(7)}`;
          return {
            title: d.title,
            image: imageUrl,
            desc: meta.data.description,
            category: d.category,
            blogId: blogId,
            owner: d.owner,
            dateTime: dateTime,
          };
        })
      );
      setBlogList(data);
      setIsLoadingBlogs(false);
    } 
  };

  return (
    <div>
      <HeadingSection {...sectionData} />
      {isConnected ? (
        <div className="grid grid-cols-3 gap-5 container">
          {blogList ? (
            blogList.map((blogData: any) => {
              return <BlogCard key={blogData.blogId} {...blogData} />;
            })
          ) : (
            <div>Not any Blogs are created</div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center text-5xl mb-96 my-auto"><span>Please Connect the wallet</span></div>
      )}
    </div>
  );
}

export default BlogList;
