import Image from "next/image";
import React, { useEffect, useState } from "react";
import HeadingSection from "../../components/Navbar/HeadingSection/HeadingSection";
import { BiTime } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import axios from "axios";
import ClockLoader from "react-spinners/ClockLoader";
import blogAbi from "../../ContractAbi/blogAbi";
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
import { useRouter } from "next/router";

function blogId() {
  const sectionData = {
    title: "Blog Details",
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isConnected } = useAccount();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: signer, isError, isLoading } = useSigner();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [singleBlogData, setSingleBlogData] = useState<any>(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { blogId } = router.query;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const contract = useContract({
    address: process.env.NEXT_PUBLIC_BLOG_CONTRACT,
    abi: blogAbi,
    signerOrProvider: signer,
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (blogId) {
      fetchBlog();
    }
  });

  const fetchBlog = async () => {
    if (isConnected) {
      setIsLoadingBlogs(true);
      let blogData = await contract?.getBlogById(blogId);
      const meta = await axios.get(blogData.blogUrl);
      const imageUrl = `https://ipfs.io/ipfs/${meta.data.image.substr(7)}`;
      const data = {
        title: blogData.title,
        desc: meta.data.description,
        image: imageUrl,
        category: blogData.category,
        owner: blogData.owner,
        dateTime: blogData.timestamp.toNumber(),
        blogId: blogData.blogId.toNumber(),
      };
      setSingleBlogData(data);
      console.log(data);
    }
  };
  return (
    <div>
      <HeadingSection {...sectionData} />
      {isLoadingBlogs && !singleBlogData ? (
        <div className="flex justify-center items-center"><ClockLoader color="#fff" size={300} /></div>
      ) : (
        <div className="mt-10 flex flex-col gap-3 bg-card-color mx-16 rounded-md py-5 px-10">
          <h2 className="text-3xl">{singleBlogData.title}</h2>
          <Image
            src={singleBlogData.image}
            height={"500"}
            width={"1115"}
            alt={"blog1"}
            className="rounded-md"
          />
          <div className="flex justify-between">
            <span className="p-1 border-2 border-blue-primary w-20 rounded-full text-center">
              {singleBlogData.category}
            </span>
            <span className="text-[#dedede] flex items-center gap-2">
              <BiTime />1 hours ago
            </span>
          </div>
          <p>
            {singleBlogData.desc}
          </p>
        </div>
      )}
    </div>
  );
}

export default blogId;
