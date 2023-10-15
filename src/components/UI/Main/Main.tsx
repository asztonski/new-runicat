import { MainContainer } from "./MainContainer/MainContainer";
import { RuneLeft } from "./RuneLeft";
import { RuneRight } from "./RuneRight";

export const Main = () => {
  return (
    <main className={"flex-1 flex items-center relative"}>
      <RuneLeft />
      <MainContainer />
      <RuneRight />
    </main>
  );
};
