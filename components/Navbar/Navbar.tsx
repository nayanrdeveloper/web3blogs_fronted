import Link from "next/link";
import React from "react";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import NavRIght from "./NavRIght";

function Navbar() {
  interface navItemStruct {
    name: string;
    link: string;
  }
  const navItem : navItemStruct[] = [
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
    <nav className="flex justify-between container py-2 bg-nav-background items-center border-b-2 border-[rgba(170,114,206,0.12)]">
      <div>
        <NavLogo />
      </div>
      <div>
        <ul className="flex gap-2">
          {navItem.map((item) => {
            return (
              <li key={item.name}>
                <NavItem {...item} />
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <NavRIght />
      </div>
    </nav>
  );
}

export default Navbar;
