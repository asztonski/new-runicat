import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className={"w-full h-[90%] max-h-[920px] lg:pt-8 lg:px-16 lg:pb-12 flex flex-col"}>
      <div className={"z-10"}>{children}</div>
    </div>
  );
};