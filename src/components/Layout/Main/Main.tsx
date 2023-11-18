import { MainContainer } from "@/components/Layout/Container/MainContainer";
import { RuneLeft } from "@/components/UI/Rune/RuneLeft";
import { RuneRight } from "@/components/UI/Rune/RuneRight";

export const Main = () => {

  return (
    <main className={"flex-1 z-10 flex items-center relative w-full overflow-hidden max-w-md lg:max-w-none m-auto"}>
      <RuneLeft />
      <MainContainer />
      <RuneRight />
    </main>
  );
};
