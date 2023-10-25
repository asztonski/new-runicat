import { HomeRune } from "./HomeRune";
import { ContentWrapper } from "@/components/Layout/Wrapper/ContentWrapper";
import RunicText from '@/assets/runic-text-home.svg'
import { Counter } from "@/components/UX/Light/Counter";

export const HomeStage = () => {
  return (
    <div className={"relative h-full w-full inset-0 m-auto flex flex-col justify-center"}>
      <HomeRune />
      <ContentWrapper>
          <div className={"flex justify-between w-full uppercase raleway tracking-[8px] text-[19px]"}>
            <h3>
              Runy
              <br />
              Kazdego
              <br />
              Dnia
            </h3>
            <h3 style={{ textAlign: 'right' }} className={"text-right"}>
              Sprawdź
              <br />
              runę
              <br />
              na dzisiaj
            </h3>
          </div>
          <div className={'mt-40'}>
            <img src={RunicText.src} alt="Runic Text" />
          </div>
          <div className={"w-full flex justify-between mt-10"}>
            <div className={"flex flex-col font-raleway uppercase"}>
              <h1 className={"tracking-[30px] text-[58px] leading-[76px] w-min"}>Kosmiczna natura runy</h1>
              <Counter />
            </div>
          </div>
      </ContentWrapper>
    </div>
  );
};
