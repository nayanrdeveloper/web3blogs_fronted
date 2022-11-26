import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons";
import Link from "next/link";

function Footer() {
  interface socialMediaListStruct {
    icon: IconType;
    url: string;
  }
  const socialMediaList: socialMediaListStruct[] = [
    {
      icon: FaLinkedin,
      url: "https://in.linkedin.com/in/nayanrdeveloper",
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/nayan_radadiya6",
    },
    {
      icon: FaGithub,
      url: "https://github.com/nayanrdeveloper",
    },
  ];
  return (
    <footer className="container flex justify-between mt-10 py-5 bg-card-color border-t-2 border-[rgba(170,114,206,0.12)]">
      <div>
        <p>© Web3blog, 2022. Created by Nayan Radadiya.</p>
      </div>
      <div>
        <ul className="flex gap-4">
          {socialMediaList.map((iconData, index) => {
            return (
              <div key={index}>
                <Link href={iconData.url || "/"} target={"_blank"}>
                  <li
                    key={index}
                    className="hover:text-blue-primary text-2xl cursor-pointer duration-300"
                  >
                    <iconData.icon />
                  </li>
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
