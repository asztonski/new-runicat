import { HomeRune } from "./HomeRune";
import { Container } from "@/components/Layout/Container/Container";
import RunicText from "@/assets/runic-text-home.svg";
import RunicText2 from "@/assets/runic-text-home-2.svg";
import { Counter } from "@/components/UX/Light/Counter";
import { Button } from "@/components/UI/Button/Button";
import { homeCopy } from "@/copy/Polish/copy";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const HomeStage = () => {
  const t = useTranslations("Home");

  const HeadingWrapper = () => {
    return (
      <div
        className={
          "flex justify-between w-full uppercase raleway tracking-[8px] text-xl !leading-relaxed after:absolute after:w-full after:h-1/4 after:top-0 after:left-0 after:bg-black after:z-[-1]"
        }
      >
        <h3
          className={"w-min lg:hidden"}
          dangerouslySetInnerHTML={{ __html: t("title.first.mobile") }}
        />
        <h3
          className={"w-min hidden lg:block"}
          dangerouslySetInnerHTML={{ __html: t("title.first.desktop") }}
        />
        <h3
          className={"w-min text-right lg:hidden"}
          dangerouslySetInnerHTML={{ __html: t("title.second.mobile") }}
        />
        <h3
          className={"text-right hidden lg:block"}
          dangerouslySetInnerHTML={{ __html: t("title.second.desktop") }}
        />
      </div>
    );
  };

  const LeftWrapper = () => {
    return (
      <div className={"w-full flex"}>
        <div className={"flex flex-col font-raleway uppercase"}>
          <h1
            dangerouslySetInnerHTML={{ __html: t("subtitle.mobile") }}
            className={
              "tracking-[30px] text-4xl 2xl:text-6xl !leading-snug w-min lg:hidden"
            }
          />

          <h1
            dangerouslySetInnerHTML={{ __html: t("subtitle.desktop") }}
            className={
              "tracking-[30px] text-4xl 2xl:text-6xl !leading-snug hidden lg:block"
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
          dangerouslySetInnerHTML={{ __html: t("desc.mobile") }}
          className={"text-[16px] leading-[30px] lg:hidden"}
        />
        <p
          dangerouslySetInnerHTML={{ __html: t("desc.desktop") }}
          className={"text-[16px] leading-[30px] hidden lg:block"}
        />

        <div className={"w-32 lg:w-full max-w-[230px] lg:h-5 relative"}>
          <Image fill src={RunicText2.src} alt="Runic Text" />
        </div>

        <Button>{t("button")}</Button>
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
