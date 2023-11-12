'use client'
import { MainContainer } from "@/components/Layout/Container/MainContainer";
import { RuneLeft } from "./RuneLeft";
import { RuneRight } from "./RuneRight";

export const Main = () => {

  return (
    <main className={"flex-1 z-10 flex items-center relative w-full overflow-hidden max-w-xl lg:max-w-none m-auto"}>
      <RuneLeft />
      <MainContainer />
      <RuneRight />
    </main>
  );
};
