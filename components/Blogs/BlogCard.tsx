import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiTime } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";

function BlogCard(data: any) {
  return (
    <div className="bg-card-color rounded-md flex flex-col p-3 gap-2">
      <Image
        src={data.image}
        alt={data.title}
        width={170}
        height={170}
        className="hover:backdrop-brightness-50 hover:opacity-70 duration-300"
      />
      <div className="px-1 flex flex-col gap-2">
        <span className="p-1 border-2 border-blue-primary w-20 rounded-full text-center">
          {data.category}
        </span>
        <Link href={`blog/${data.blogId}`}>
          <h2 className="text-2xl hover:text-blue-primary duration-300 cursor-pointer">
            {data.title}
          </h2>
        </Link>
        <div className="flex justify-between text-[#dedede]">
          <span className="text-[#dedede] flex items-center gap-2">
            <BiTime />
            {/* {data.time} */}
          </span>
          <span className="text-[#dedede] flex items-center gap-2">
            <BsFillEyeFill />
            {/* {data.views} */}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
