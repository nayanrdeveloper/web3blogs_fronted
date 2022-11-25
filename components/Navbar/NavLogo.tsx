import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavLogo() {
  return (
    <div className="flex gap-2 items-center">
      <Link href={"/"}>
        <Image
          src={"/logo.svg"}
          alt=""
          height={50}
          width={50}
          className="cursor-pointer"
        />
      </Link>
      <h1 className="text-2xl font-semibold">Web3Blogs</h1>
    </div>
  );
}

export default NavLogo;
