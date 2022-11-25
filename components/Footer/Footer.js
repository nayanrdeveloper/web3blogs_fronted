import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaMedium,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  const socialIconLIst = [
    {
      icon: FaFacebook,
      link: "",
    },
    {
      icon: FaTwitter,
      link: "",
    },
    {
      icon: FaLinkedin,
      link: "",
    },
    {
      icon: FaMedium,
      link: "",
    },
    {
      icon: FaInstagram,
      link: "",
    },
  ];
  return (
    <footer className="container flex justify-between mt-10 py-5 bg-card-color border-t-2 border-[rgba(170,114,206,0.12)]">
      <div>
        <p>© Web3blog, 2022. Created by Nayan Radadiya.</p>
      </div>
      <div>
        <ul className="flex gap-4">
          {socialIconLIst.map((iconData, index) => {
            return (
              <li key={index} className='hover:text-blue-primary text-2xl cursor-pointer duration-300'>
                <iconData.icon />
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
