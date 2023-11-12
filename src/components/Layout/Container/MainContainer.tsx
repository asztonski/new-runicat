"use client";
import { HomeStage } from "@/stages/Home/HomeStage";
import { SetupStage } from "@/stages/Setup/SetupStage";
import { ResultStage } from "@/stages/Result/ResultStage";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export const MainContainer = () => {
  const stage  = useContext(AppContext);

  return (
    <div className={"m-auto w-full h-full max-w-[1600px] lg:px-12 box-content"}>
      <HomeStage />
    </div>
  );
};
