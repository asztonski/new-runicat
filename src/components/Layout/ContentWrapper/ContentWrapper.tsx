import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}

export const ContentWrapper = ({ children }: Props) => {
  return (
    <div className={"w-full h-full pt-16 px-10 pb-12 flex flex-col"}>
      <div className={"z-10"}>{children}</div>
    </div>
  );
};
