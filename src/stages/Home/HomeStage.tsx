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

  const copyMappingHandler = (section: string) => {
    return isDesktop ? homeCopy[section].desktop : homeCopy[section].mobile;
  }

  const HeadingWrapper = () => {
    const selectedCopy = copyMappingHandler("top");

    return (
      <div
        className={
          "flex justify-between w-full uppercase raleway tracking-[8px] text-sm md:text-xl"
        }
      >
        {selectedCopy.map((heading: string, id: number) => (
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
    const selectedCopy = copyMappingHandler("bottom");

    return (
      <div className={"w-full flex"}>
        <div className={"flex flex-col font-raleway uppercase"}>
          <h1 className={"tracking-[30px] text-[58px] leading-[76px] w-min"}>
            {selectedCopy[0]}
          </h1>
          <Counter />
        </div>
      </div>
    );
  };

  const RightWrapper = () => {
    const selectedCopy = copyMappingHandler("bottom");

    return (
      <div className={"flex flex-col gap-10 w-full max-w-[470px] self-center"}>
        <p className={"text-[16px] leading-[30px]"}>
          {selectedCopy[1]}
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
      <HomeRune isDesktop={isDesktop} />
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
