import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className={"w-full h-[90%] max-h-[920px] md:pt-8 md:px-16 md:pb-12 flex flex-col"}>
      <div className={"z-10"}>{children}</div>
    </div>
  );
};