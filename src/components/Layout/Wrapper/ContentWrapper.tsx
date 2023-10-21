import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}

export const ContentWrapper = ({ children }: Props) => {
  return (
    <div className={"w-full h-[90%] max-h-[920px] pt-8 px-16 pb-12 flex flex-col"}>
      <div className={"z-10"}>{children}</div>
    </div>
  );
};
