"use client";
import { HomeRune } from "./HomeRune";
import { ContentWrapper } from "@/components/Layout/Wrapper/ContentWrapper";
import RunicText from "@/assets/runic-text-home.svg";
import RunicText2 from "@/assets/runic-text-home-2.svg";
import { Counter } from "@/components/UX/Light/Counter";
import { Button } from "@/components/UI/Button/Button";
import { homeCopy } from "@/copy/Polish/copy";

type HomeStageProps = {
  isDesktop: boolean;
};

export const HomeStage: React.FC<HomeStageProps> = ({ isDesktop }) => {
  const HeadingWrapper = () => {
    return (
      <div
        className={
          "flex justify-between w-full uppercase raleway tracking-[8px] text-sm md:text-xl"
        }
      >
        {!isDesktop ? (
          <>
            {homeCopy.top.mobile.map((heading, id) => (
              <h3
                className={`${id === 1 ? "text-right" : ""}`}
                dangerouslySetInnerHTML={{ __html: heading }}
                key={id}
              />
            ))}
          </>
        ) : (
          <>
            {homeCopy.top.desktop.map((heading, id) => (
              <h3
                className={`${id === 1 ? "text-right" : ""}`}
                dangerouslySetInnerHTML={{ __html: heading }}
                key={id}
              />
            ))}
          </>
        )}
      </div>
    );
  };

  const LeftWrapper = () => {
    return (
      <div className={"w-full flex"}>
        <div className={"flex flex-col font-raleway uppercase"}>
          <h1 className={"tracking-[30px] text-[58px] leading-[76px] w-min"}>
            {!isDesktop
              ? homeCopy.bottom.mobile[0]
              : homeCopy.bottom.desktop[0]}
          </h1>
          <Counter />
        </div>
      </div>
    );
  };

  const RightWrapper = () => {
    return (
      <div className={"flex flex-col gap-10 w-full max-w-[470px] self-center"}>
        <p className={"text-[16px] leading-[30px]"}>
          {!isDesktop ? homeCopy.bottom.mobile[1] : homeCopy.bottom.desktop[1]}
        </p>
        <img
          className={"w-full max-w-[230px]"}
          src={RunicText2.src}
          alt="Runic Text"
        />
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
      <ContentWrapper>
        <HeadingWrapper />
        <div className={"mt-40"}>
          <img src={RunicText.src} alt="Runic Text" />
        </div>
        <div className={"flex flex-col md:flex-row w-full mt-10"}>
          <LeftWrapper />
          <RightWrapper />
        </div>
      </ContentWrapper>
    </div>
  );
};
