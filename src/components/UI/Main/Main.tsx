'use client'
import { MainContainer } from "@/components/Layout/Container/MainContainer";
import { RuneLeft } from "./RuneLeft";
import { RuneRight } from "./RuneRight";
import { useContext } from 'react'
import { AppContext } from "@/context/AppContext";

export const Main = () => {

  const { isDesktop } = useContext(AppContext)

  return (
    <main className={"flex-1 z-10 flex items-center relative"}>
      {isDesktop ? <RuneLeft /> : null}
      <MainContainer isDesktop={isDesktop} />
      {isDesktop ? <RuneRight /> : null}
    </main>
  );
};
