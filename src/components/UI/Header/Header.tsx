import React from "react";
import { Logo } from "./Logo";
import { InstagramIcon, FacebookIcon } from "./Socials";

export const Header = () => {
  return (
    <header className={"flex justify-between raleway uppercase"}>
      <div className={"flex gap-3 md:gap-4 items-center"}>
        <Logo />
        <h1 className={"tracking-[8px] md:tracking-[12px] text-[19px] md:text-[27px] flex items-center"}>
          runicat<sup className={"text-grey text-[11px] md:text-[12px]"}>beta</sup>
        </h1>
      </div>
      <div className={"flex gap-4"}>
        <a
          href="https://www.instagram.com/runicatofficial/"
          target="_blank"
          className={"z-10"}
        >
          <InstagramIcon />
        </a>
        <a
          target="_blank"
          className={"z-10"}
          href="https://www.facebook.com/Runicat"
        >
          <FacebookIcon />
        </a>
      </div>
    </header>
  );
};
