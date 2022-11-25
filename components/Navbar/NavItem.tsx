import Link from "next/link";
import React from "react";

interface navItemStruct {
  name: string;
  link: string;
}

function NavItem(data : navItemStruct) {
  const navItem = [
    {
      name: "Blog",
      link: "/",
    },
    {
      name: "Create Blog",
      link: "/create_blog",
    },
  ];
  return (
    <div className="p-1 rounded-md hover:text-blue-primary cursor-pointer duration-300">
      <Link href={data.link}>{data.name}</Link>
    </div>
  );
}

export default NavItem;
