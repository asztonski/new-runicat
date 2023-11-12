"use client";
import { HomeRune } from "./HomeRune";
import { Container } from "@/components/Layout/Container/Container";
import RunicText from "@/assets/runic-text-home.svg";
import RunicText2 from "@/assets/runic-text-home-2.svg";
import { Counter } from "@/components/UX/Light/Counter";
import { Button } from "@/components/UI/Button/Button";
import { homeCopy } from "@/copy/Polish/copy";
import Image from "next/image";

export const HomeStage = () => {
  const HeadingWrapper = () => {
    return (
      <>
        {/* MOBILE */}
        <div
          className={
            "flex lg:hidden justify-between w-full uppercase raleway tracking-[8px] text-sm"
          }
        >
          {homeCopy.top.mobile.map((heading: string, id: number) => (
            <h3
              className={`${id === 1 ? "text-right" : ""}`}
              dangerouslySetInnerHTML={{ __html: heading }}
              key={id}
            />
          ))}
        </div>
        {/* DESKTOP */}
        <div
          className={
            "hidden lg:flex justify-between w-full uppercase raleway tracking-[8px] text-xl after:absolute after:content-[''] after:w-full after:h-[20%] after:top-[5%] after:left-0 after:bg-black after:z-[-1]"
          }
        >
          {homeCopy.top.desktop.map((heading: string, id: number) => (
            <h3
              className={`${id === 1 ? "text-right" : ""}`}
              dangerouslySetInnerHTML={{ __html: heading }}
              key={id}
            />
          ))}
        </div>
      </>
    );
  };

  const LeftWrapper = () => {
    return (
      <div className={"w-full flex"}>
        <div className={"flex flex-col font-raleway uppercase"}>
          <>
            <h1
              className={
                "lg:hidden tracking-[30px] text-[58px] leading-[76px] w-min"
              }
            >
              {homeCopy.bottom.mobile[0]}
            </h1>
            <h1
              className={
                "hidden lg:block tracking-[30px] text-6xl leading-snug w-min"
              }
            >
              {homeCopy.bottom.desktop[0]}
            </h1>
          </>

          <Counter />
        </div>
      </div>
    );
  };

  const RightWrapper = () => {
    return (
      <div className={"flex flex-col gap-10 w-full max-w-[470px] self-center"}>
        <>
          <p className={"lg:hidden text-[16px] leading-[30px]"}>
            {homeCopy.bottom.mobile[1]}
          </p>
          <p className={"hidden lg:block text-[16px] leading-[30px]"}>
            {homeCopy.bottom.desktop[1]}
          </p>
        </>

        <div className={"w-full max-w-[230px] h-5 relative"}>
          <Image fill src={RunicText2.src} alt="Runic Text" />
        </div>

        <Button>{homeCopy.buttons[0]}</Button>
      </div>
    );
  };

  return (
    <div
      className={
        "relative h-full w-full inset-0 m-auto flex flex-col justify-center"
      }
    >
      <HomeRune />
      <Container>
        <HeadingWrapper />
        <div className={"mt-40 relative w-full max-w-[172px] h-5"}>
          <Image fill src={RunicText.src} alt="Runic Text" />
        </div>
        <div className={"flex flex-col lg:flex-row w-full mt-10 after:absolute after:content-[''] after:w-full after:h-1/4 after:bottom-0 after:left-0 after:bg-black after:z-[-1]"}>
          <LeftWrapper />
          <RightWrapper />
        </div>
      </Container>
    </div>
  );
};
