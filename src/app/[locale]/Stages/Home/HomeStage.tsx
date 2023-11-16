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
      <div
        className={
          "flex justify-between w-full uppercase raleway tracking-[8px] text-xl !leading-relaxed after:absolute after:w-full after:h-1/4 2xl:after:h-0 after:top-0 after:left-0 after:bg-black after:z-[-1]"
        }
      >
        {homeCopy.top.map((heading: string, id: number) => (
          <h3
            className={`${id === 1 ? "text-right" : ""}`}
            dangerouslySetInnerHTML={{ __html: heading }}
            key={id}
          />
        ))}
      </div>
    );
  };

  const LeftWrapper = () => {
    return (
      <div className={"w-full flex"}>
        <div className={"flex flex-col font-raleway uppercase"}>
          <h1 dangerouslySetInnerHTML={{__html: homeCopy.bottom[0]}}
            className={
              "tracking-[30px] text-4xl 2xl:text-6xl !leading-snug w-min"
            }
          />

          <Counter />
        </div>
      </div>
    );
  };

  const RightWrapper = () => {
    return (
      <div
        className={
          "flex flex-col gap-10 w-full mt-4 lg:mt-0 max-w-[470px] self-center"
        }
      >
          <p
            dangerouslySetInnerHTML={{ __html: homeCopy.bottom[1] }}
            className={"text-[16px] leading-[30px]"}
          />

        <div className={"w-32 lg:w-full max-w-[230px] lg:h-5 relative"}>
          <Image fill src={RunicText2.src} alt="Runic Text" />
        </div>

        <Button>{homeCopy.button}</Button>
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
      <Container alignBetween>
        <HeadingWrapper />
        <div>
          <div className={"relative w-32 h-3 mt-28 lg:mt-0 lg:w-44 lg:h-5"}>
            <Image fill src={RunicText.src} alt="Runic Text" />
          </div>
          <div
            className={
              "flex flex-col lg:flex-row w-full mt-7 lg:mt-10 after:absolute after:w-full after:h-1/4 2xl:after:h-0 after:bottom-0 after:left-0 lg:after:bg-black after:z-[-1]"
            }
          >
            <LeftWrapper />
            <RightWrapper />
          </div>
        </div>
      </Container>
    </div>
  );
};
