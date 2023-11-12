import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  alignBetween?: boolean;
}

export const Container = ({ children, alignBetween = false }: Props) => {
  return (
    <div className={"w-full h-full max-h-[720px] lg:pt-6 lg:px-3 lg:pb-8 xl:pt-8 xl:px-16 xl:pb-12"}>
      <div className={`z-10 h-full ${alignBetween ? 'flex flex-col justify-between' : ''}`}>{children}</div>
    </div>
  );
};